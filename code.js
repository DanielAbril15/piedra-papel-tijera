const userRock = document.getElementById("rock");
const userPaper = document.getElementById("paper");
const userScissors = document.getElementById("scissors");
const startGame = document.getElementById("action");
const resultGame = document.getElementById("result");

let userOption;
let cpuOption;
// Numero random de 1 a 3 para la eleccion de la cpu
const cpuRandom = function random() {
  return Math.floor(Math.random() * 3 + 1);
};

// eleccion de jugador transformado a dato numerico
userRock.onclick = function () {
  return (userOption = 1);
};
userPaper.onclick = function () {
  return (userOption = 2);
};
userScissors.onclick = function () {
  return (userOption = 3);
};

// Escenarios en los que el usuario gana
function optionsWin(userOp, cpuOp) {
  if (userOp === 1 && cpuOp === 3) {
    return true;
  }
  if (userOp === 2 && cpuOp === 1) {
    return true;
  }
  if (userOp === 3 && cpuOp === 2) {
    return true;
  }
}
