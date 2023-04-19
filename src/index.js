import './style.css';
// // Get the input fields and button
// const nameInput = document.querySelector('#text');
// const scoreInput = document.querySelector('#text1');
// const submitButton = document.querySelector('#btn1');
// const refreshButton = document.querySelector('.r-btn');

// //Function to refresh page
// refreshButton.addEventListener('click', function() {
//   location.reload();
// });

// // Get the leaderboard list element
// const leaderboardList = document.querySelector('.list');

// // Initialize the scores array
// let scores = [];

// // Function to update the leaderboard list with the scores array
// function updateLeaderboard() {
//   // Create a new HTML string for the leaderboard list
//   let leaderboardHTML = '';

//   // Loop through each score in the array and add a new list item
//   scores.forEach(function(score) {
//     leaderboardHTML += `<li class="list-item">${score.name}: ${score.score}</li>`;
//   });

//   // Set the leaderboard list's innerHTML to the new HTML string
//   leaderboardList.innerHTML = leaderboardHTML;
// }

// // Add event listeners to the name and score input fields
// nameInput.addEventListener('input', function(event) {
//   // Get the name value from the input field
//   const name = event.target.value.trim();

//   // Update the name property of the last score in the array
//   if (scores.length > 0) {
//     scores[scores.length - 1].name = name;
//   }
// });

// scoreInput.addEventListener('input', function(event) {
//   // Get the score value from the input field
//   const score = event.target.value.trim();

//   // Update the score property of the last score in the array
//   if (scores.length > 0) {
//     scores[scores.length - 1].score = score;
//   }
// });

// // Add an event listener to the submit button
// submitButton.addEventListener('click', function(event) {
//   event.preventDefault(); // Prevent form submission

//   // Get the name and score values from the input fields
//   const name = nameInput.value.trim();
//   const score = scoreInput.value.trim();

//   // Clear the input fields
//   nameInput.value = '';
//   scoreInput.value = '';

//   // Add the new score to the scores array
//   scores.push({ name: name, score: score });

//   // Update the leaderboard list with the new scores array
//   updateLeaderboard();
// });
// */