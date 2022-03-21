"use strict";

const home = document.querySelector(".home");
const game = document.querySelector(".game");
const end = document.querySelector(".end");

function showPanel(panel) {
  panel.classList.remove("hidden");
}

function hideAllPanel() {
  home.classList.add("hidden");
  game.classList.add("hidden");
  end.classList.add("hidden");
}

function showEnd() {
  showPanel(end);
  const pElement = end.querySelector("p");
  pElement.textContent = "Has llegado hasta aquí finalmente";
  const homeBtn = end.querySelector("button");
  homeBtn.addEventListener("click", (e) => {
    hideAllPanel();
    home();
  });
}

function showGame() {
  showPanel(game);
  const gameBtn = game.querySelector("button");
  gameBtn.addEventListener("click", (e) => {
    hideAllPanel();
    showEnd();
  });
}

function showHome() {
  showPanel(home);
  const homeBtn = home.querySelector("button");
  homeBtn.addEventListener("click", (e) => {
    hideAllPanel();
    showGame();
  });
}

showHome();
