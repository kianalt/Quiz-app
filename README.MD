Quiz App

Overview

The Quiz App is a dynamic web application that allows users to test their knowledge on various topics. Users can select their difficulty level, answer multiple-choice questions, and save their scores to compete with others. The app is built using JavaScript and fetches questions from the Open Trivia Database API.

Features

Dynamic Question Fetching:

Fetches 10 questions from the Open Trivia Database API based on the selected difficulty level.

Difficulty Levels:

Users can choose between easy, medium, and hard difficulty levels.

Interactive Quiz Interface:

Displays one question at a time with four answer choices.

Highlights correct and incorrect answers.

Scoring System:

Each correct answer awards 10 points.

Keeps track of the score throughout the quiz.

High Scores:

Stores top 10 high scores in localStorage.

Allows users to input their name and save their score.

End Screen:

Displays the final score.

Allows users to return to the homepage.

Technologies Used

JavaScript for logic and interactivity.

HTML/CSS for structure and styling.

DOM Manipulation for dynamic content updates.

localStorage for persistent data storage.

Open Trivia Database API for question data.

File Structure

index.html: Main quiz interface.

end.html: End screen for saving scores.

helper.js: Helper functions for data formatting.

main.js: Core logic for fetching data, displaying questions, and handling user interactions.

How to Use

Start the Quiz:

Choose a difficulty level on the homepage.

The quiz will start with the first question.

Answer Questions:

Click on one of the four answer options.

Correct answers are highlighted in green; incorrect ones in red.

Navigate Between Questions:

Use the "Next" button to move to the next question.

Finish the Quiz:

After the last question, click "Finish" to see your final score.

Save High Scores:

Enter your name and click "Save" to store your score.

View the leaderboard on the high scores page.
