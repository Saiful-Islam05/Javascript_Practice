// Initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

//Finding Elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  attempts++;
  if (attempts > 4) {
    guessingNumber.disabled = true;
    checkButton.disabled = true;
  }
  if (attempts < 6) {
    let guessNumber = Number(guessingNumber.value);
    checkResult(guessNumber);
    remainingAttempts.innerHTML = `Remaining Attempts: ${
      totalAttempts - attempts
    }`;
  }
  guessingNumber.value = "";
});

function checkResult(guessingNumber) {
  const randomNumber = getRandomNumber(5);
  if (guessingNumber == randomNumber) {
    totalWons++;
    resultText.innerHTML = `You have Won!`;
  } else {
    totalLosts++;
    resultText.innerHTML = `You have lost! Random number was: ${randomNumber}`;
  }
  lostWonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totalLosts} `;
  lostWonMessage.classList.add("large-text");
  cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
