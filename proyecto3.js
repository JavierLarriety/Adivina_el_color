"use strict";

const State = {
  colores: [],
  colorGanador: null,
};

const liListElement = document.querySelectorAll(".cuadrado");
const ulElement = document.querySelector("ul");

const getRandom = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const getRandomColor = () => {
  return `RGB(${getRandom(255)},${getRandom(255)},${getRandom(255)})`;
};

const cuadradosPintados = () => {
  let contador = 0;
  for (const cuadrado of liListElement) {
    cuadrado.style.backgroundColor = State.colores[contador];
    cuadrado.setAttribute("data-index", contador);
    contador++;
  }
};

function main() {
  for (let index = 0; index < 6; index++) {
    State.colores[index] = getRandomColor();
  }
  const winner = getRandom(5);
  State.colorGanador = winner;
  let h2 = document.getElementById("colorobjetivo");
  h2.textContent = State.colores[winner];

  console.log(State.colores);
  console.log(State.colorGanador);

  cuadradosPintados();
}

main();

ulElement.addEventListener("click", (e) => {
  const target = e.target;
  if (target.matches("li")) {
    const selecionUser = Number(target.getAttribute("data-index"));
    console.log("TARGET", target);
    console.log(selecionUser);
    if (selecionUser === State.colorGanador) {
      console.log("Ganaste chaval!");
    } else {
      console.log("Ententalo otra vez");
    }
  }
});

let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", main);
