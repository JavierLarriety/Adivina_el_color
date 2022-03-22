"use strict";

const State = {
    colores: [],
    colorGanador: null,
};

const liListElement = document.querySelectorAll(".cuadrado");
const ulElement = document.querySelector("ul");
const messageElement = document.querySelector("#message");
const hits = document.querySelector(".hits");
const failures = document.querySelector(".failures");
let aciertos = 0;
let fallos = 0;

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
        const selectionUser = Number(target.getAttribute("data-index"));
        console.log("TARGET", target);
        console.log(selectionUser);
        if (aciertos === 2) {
            // aciertos++;
            messageElement.textContent = "¡Victoria!";
            hits.textContent = `ACIERTOS:${aciertos}/3`;
            return;
            //hay que poner una función o algo aquí que pare no deje seguir jugando
        } else if (selectionUser === State.colorGanador) {
            aciertos++;
            messageElement.textContent = "¡Has acertado!";
            messageElement.style.color = "green";
            hits.textContent = `ACIERTOS:${aciertos}/3`;
            console.log("Aciertos:", aciertos);
        } else if (fallos === 2) {
            // fallos++;
            messageElement.textContent = "¡Perdiste,vuelve a intentarlo!";
            failures.textContent = `FALLOS:${fallos}/3`;
            return;
            //aquí también habría que poner esa función o ese algo para parar el bucle
        } else {
            fallos++;
            messageElement.textContent = "¡Has fallado!";
            messageElement.style.color = "red";
            messageElement.style.background = "cyan"
            failures.textContent = `FALLOS:${fallos}/3`;
            console.log("Fallos:", fallos);
        }
    }
});

let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", main);