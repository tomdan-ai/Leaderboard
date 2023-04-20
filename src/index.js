import './style.css';
import { fetchData, setScores } from './modules/scoresApi.js';
// Get the input fields and button
const nameInput = document.querySelector('#text');
const scoreInput = document.querySelector('#text1');
const submitButton = document.querySelector('#btn1');
const refreshButton = document.querySelector('.r-btn');
const leaderboardList = document.querySelector('.list');

// Initialize the scores array
let scores = [];

// Function to refresh page
refreshButton.addEventListener('click', async () => {
  const leaderboardList = document.querySelector('.list');
  let leaderboardHTML = '';
  const dataFromAPI = await fetchData();
  scores = [...dataFromAPI.result];
  dataFromAPI.result.forEach((score) => {
    leaderboardHTML += `<li class="list-item">${score.user}: ${score.score}</li>`;
  });
  leaderboardList.innerHTML = leaderboardHTML;
});

// Function to update the leaderboard list with the scores array
function updateLeaderboard() {
  // Create a new HTML string for the leaderboard list
  let leaderboardHTML = '';

  // Loop through each score in the array and add a new list item
  scores.forEach((score) => {
    leaderboardHTML += `<li class="list-item">${score.user}: ${score.score}</li>`;
  });

  // Set the leaderboard list's innerHTML to the new HTML string
  leaderboardList.innerHTML = leaderboardHTML;
}

// Add event listeners to the name and score input fields
nameInput.addEventListener('input', (event) => {
  // Get the name value from the input field
  const name = event.target.value.trim();

  // Update the name property of the last score in the array
  if (scores.length > 0) {
    scores[scores.length - 1].user = name;
  }
});

scoreInput.addEventListener('input', (event) => {
  // Get the score value from the input field
  const score = event.target.value.trim();

  // Update the score property of the last score in the array
  if (scores.length > 0) {
    scores[scores.length - 1].score = score;
  }
});

// Add an event listener to the submit button
submitButton.addEventListener('click', () => {
  // Get the name and score values from the input fields
  const user = nameInput.value.trim();
  const score = scoreInput.value.trim();

  setScores({ user, score });

  // Add the new score to the scores array
  scores.push({ user, score });

  // Clear the input fields
  nameInput.value = '';
  scoreInput.value = '';

  // Update the leaderboard list with the new scores array
  updateLeaderboard();
});