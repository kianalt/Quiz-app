import formatData from "./helper.js";
const level = localStorage.getItem("level") || "medium";
const BASE_URL = `https://opentdb.com/api.php?amount=10&difficulty=${level}&type=multiple`;
const loader = document.getElementById("loader");
const container = document.getElementById("container");
let questionText = document.getElementById("question-text");
let anwerList = document.querySelectorAll(".answer-text");
let next = document.getElementById("next-button");
let finish = document.getElementById("finish-button");
let questionNumber = document.getElementById("question-number");
let errore = document.getElementById("errore");

let correctAnswer = null;
let formattedData = null;
let questionIndex = 0;
let scoreText = document.getElementById("score");
let score = 0;
let CORRECT_Bounes = 10;
let isAccepted = true;
const start = () => {
  showQuestion();
  loader.style.display = "none";
  container.style.display = "block";
};

const fetchData = async () => {
  try {
    const response = await fetch(BASE_URL);
    const json = await response.json();
    formattedData = formatData(json.results);
    console.log(json.results);
    start();
  } catch (error) {
    loader.style.display = "none";
    errore.style.display = "block";
  }
};

const showQuestion = () => {
  questionNumber.innerText = questionIndex + 1;
  const { question, answers, correctAnswerIndex } =
    formattedData[questionIndex];
  correctAnswer = correctAnswerIndex;
  questionText.innerText = question;
  anwerList.forEach((buttun, index) => {
    buttun.innerText = answers[index];
  });
};
window.addEventListener("load", fetchData);

anwerList.forEach((buttun, index) => {
  buttun.addEventListener("click", (event) => {
    const isCorrect = index === correctAnswer ? true : false;
    if (!isAccepted) {
      return;
    } else if (isCorrect) {
      event.target.classList.add("correct");
      score += CORRECT_Bounes;
      scoreText.innerText = score;
      isAccepted = false;
    } else {
      event.target.classList.add("incorrect");
      anwerList[correctAnswer].classList.add("correct");
      isAccepted = false;
    }
  });
});
const removeClasses = () => {
  anwerList.forEach((buttun, index) => {
    buttun.classList.remove("correct");
    buttun.classList.remove("incorrect");
    isAccepted = true;
  });
};
next.addEventListener("click", () => {
  if (questionIndex <= formattedData.length) {
    questionIndex++;
    showQuestion();
    removeClasses();
  } else {
    localStorage.setItem("score", JSON.stringify(score));
    window.location.assign("end.html");
    isAccepted = true;
  }
});
finish.addEventListener("click", () => {
  localStorage.setItem("score", JSON.stringify(score));
  console.log(score);
  window.location.assign("end.html");
  isAccepted = true;
});
