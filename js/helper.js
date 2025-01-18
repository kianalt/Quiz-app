const decodeHTML = (text) => {
  const parser = new DOMParser();
  const decoded = parser.parseFromString(text, "text/html").documentElement
    .textContent;
  return decoded;
};
const formatData = (questionDtata) => {
  const result = questionDtata.map((item) => {
    const questionObject = {
      question: decodeHTML(item.question),
    };
    const answers = [...item.incorrect_answers];
    const correctAnswerIndex = Math.floor(Math.random() * 4);
    answers.splice(correctAnswerIndex, 0, item.correct_answer);
    questionObject.answers = answers;
    questionObject.correctAnswerIndex = correctAnswerIndex;
    return questionObject;
  });
  return result;
};

export default formatData;
