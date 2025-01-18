const score = JSON.parse(localStorage.getItem("score")); // Get the current score
const highScores = JSON.parse(localStorage.getItem("highScore") || "[]"); // Get high scores or initialize an empty array
const scoreElement = document.querySelector("p"); // Correct selector
const button = document.querySelector("button"); // Corrected typo in "button"
const input = document.querySelector("input");

// Display the current score
scoreElement.innerText = score;

const saveHandler = () => {
  // Validate the input name and score
  if (!input.value.trim() || score == null) {
    alert("Invalid name or score");
    return;
  }

  // Create a final score object
  const finalScore = { name: input.value.trim(), score: score };

  // Update the high scores
  highScores.push(finalScore);
  highScores.sort((a, b) => b.score - a.score); // Sort in descending order by score
  highScores.splice(10); // Keep only the top 10 scores

  // Save updated high scores to local storage
  localStorage.setItem("highScore", JSON.stringify(highScores));

  // Remove the current score from local storage
  localStorage.removeItem("score");

  // Redirect to the home page
  window.location.assign("/");
};

// Add event listener to the button
button.addEventListener("click", saveHandler);
