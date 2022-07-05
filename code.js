const startGame = document.querySelector("#action");
const buttonGame = document.querySelector(".tool-container");
const selectionGame = document.querySelector("#selection");
const userSelection = document.querySelector(".user_selection");
const cpuSelection = document.querySelector(".cpu_selection");
const resultGame = document.querySelector(".result");

let userOption;
let cpuOption;
// Numero random de 1 a 3 para la eleccion de la cpu
function cpuRandom() {
  return Math.floor(Math.random() * 3 + 1);
}

// eleccion de jugador transformado a dato numerico y visualizacion en pantalla de la eleccion
document.addEventListener("click", function (event) {
  if (event.target.dataset.id === "rock") {
    userOption = 1;
    cpuOption = cpuRandom();
    userSelection.innerHTML = `<div id="user-selection" class="selection-game icon-piedra">`;
  } else if (event.target.dataset.id === "paper") {
    userOption = 2;
    cpuOption = cpuRandom();
    userSelection.innerHTML = `<div id="user-selection" class="selection-game icon-papel">`;
  } else if (event.target.dataset.id === "scissors") {
    userOption = 3;
    cpuOption = cpuRandom();
    userSelection.innerHTML = `<div id="user-selection" class="selection-game icon-tijera">`;
  }
});

// Escenarios en los que el usuario gana
function optionsWin(userOp, cpuOp) {
  if (userOp === 1 && cpuOp === 3) {
    return (resultGame.innerHTML = `<p class='win'>¡¡¡GANASTE!!!</p>`);
  }
  if (userOp === 2 && cpuOp === 1) {
    return (resultGame.innerHTML = `<p class='win'>¡¡¡GANASTE!!!</p>`);
  }
  if (userOp === 3 && cpuOp === 2) {
    return (resultGame.innerHTML = `<p class='win'>¡¡¡GANASTE!!!</p>`);
  }
  if (userOp === cpuOp) {
    resultGame.innerHTML = "<p class ='draw'>Empate</p>";
  } else {
    resultGame.innerHTML = `<p class='lose'>Perdiste :'(</p>`;
  }
}

// dessarrollo del juego

startGame.addEventListener("click", function (event) {
  userOption === undefined
    ? alert("Tienes que seleccionar una opcion para empezar el juego!")
    : (cpuOption = cpuRandom());

  if (cpuOption === 1) {
    cpuSelection.innerHTML = `<div id="cpu-selection" class="selection-game icon-piedra">`;
  } else if (cpuOption === 2) {
    cpuSelection.innerHTML = `<div id="cpu-selection" class="selection-game icon-papel">`;
  } else if (cpuOption === 3) {
    cpuSelection.innerHTML = `<div id="cpu-selection" class="selection-game icon-tijera">`;
  }
  optionsWin(userOption, cpuOption);
});
