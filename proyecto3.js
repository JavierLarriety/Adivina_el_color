"use strict";

//Poner el color que tengo que adivinar en el h2

const getRandom = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const getRandomColor = () => {
  return `${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)}`;
};
const randomColor = getRandomColor();

// console.log(randomColor);

let h2 = document.getElementById("colorobjetivo");
h2.textContent = `RGB: (${randomColor})`;

//Pintar los li de un color aleatorio y que uno de ellos sea el correcto

const liListElement = document.querySelectorAll(".cuadrado");

const cuadradosPintados = () => {
  for (const cuadrado of liListElement) {
    cuadrado.style.backgroundColor = `
    rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
  }
};
cuadradosPintados();

//Juego con contador aciertos y fallos

let mensajeEstado = document.querySelector("#message");

function juego() {
  let contadorAciertos = aciertos;
  let contadorFallos = fallos;
  let aciertosEstado = document.querySelector(".hits");
  let fallosEstado = document.querySelector(".failures");
  if ((cuadradoClickado == randomColor, contadorAciertos++)) {
    message.textContent = "¡Acertaste!";
    aciertosEstado.textContent = `${contadorAciertos}/3`;
  } else if (contadorAciertos === 3) {
    message.textContent = "¡Ganaste!";
  } else if ((cuadradoClickado !== randomColor, contadorFallos++)) {
    message.textContent = "Fallaste!";
    fallosEstado.textContent = `${contadorFallos}/3`;
  } else if (contadorFallos === 3) {
    message.textContent = "¡Perdiste,vuelve a intentarlo!";
  }
}

//Definir cuadradoClickado

//Al darle a juego nuevo resetear

const clickReset = () => {
  window.location.reload(); //preguntarle a Stefano si esto está bien así o hay algo mejor
};
resetButton = document.addEventListener("click", clickReset);
