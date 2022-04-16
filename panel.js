"use strict";

const start = document.querySelector(".start");
const game = document.querySelector(".game");
const results = document.querySelector(".results");

function showPanel(panel) {
  panel.classList.remove("hidden");
}

function hideAllPanel() {
  start.classList.add("hidden");
  game.classList.add("hidden");
  results.classList.add("hidden");
}

function showResults() {
  showPanel(results);
  const resultsBtn = results.querySelector("button");
  resultsBtn.addEventListener("click", e => {
    hideAllPanel();
    begin();
  });
}

function showGame() {
  showPanel(game);
  const gameButton = game.querySelector("button");
  gameButton.addEventListener("click", e => {
    hideAllPanel();
    showResults();
  });
}

function begin() {
  showPanel(start);
  const startBtn = start.querySelector("button");
  startBtn.addEventListener("click", e => {
    hideAllPanel();
    showGame();
  });
}

begin();

export { showResults, showGame, begin };
