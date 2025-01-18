const highScores = JSON.parse(localStorage.getItem("highScore") || "[]"); // Fallback to an empty array
const list = document.querySelector("ol");

// Check if there are high scores
if (highScores.length === 0) {
  list.innerHTML = "<li>No high scores available</li>";
} else {
  // Map and display high scores
  list.innerHTML = highScores
    .map((score, index) => {
      return `
        <li>
          <span>${index + 1}.</span>
          <p>${score.name}</p>
          <span>${score.score}</span>
        </li>`;
    })
    .join(""); // Join the array into a single string
}

// Debugging: Log highScores
console.log("High Scores:", highScores);
