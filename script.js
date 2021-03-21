"use strict";

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high_score = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

const displayNumber = (number) => {
  document.querySelector(".number").textContent = number;
};

const setBGColor = (color) => {
  document.querySelector("body").style.backgroundColor = color;
};

const setNumWidth = (width) => {
  document.querySelector(".number").style.width = width;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("⛔ No Number!");

    // When player wins
  } else if (guess == secret_number) {
    displayMessage("🎉 Correct Number");
    displayNumber(secret_number);
    setBGColor("#60b347");
    setNumWidth("30rem");

    if (score > high_score) {
      high_score = score;
    }
    document.querySelector(".highscore").textContent = high_score;

    // When guess is too high
  } else if (guess != secret_number) {
    if (score > 1) {
      displayMessage(guess > secret_number ? "📈 Too high" : "📉 Too low");
      score--;
      displayScore(score);
    } else {
      displayMessage("☠ You lost the game!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  displayScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = "";
  setBGColor("#222");
  setNumWidth("15rem");
});
