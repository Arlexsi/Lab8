
let playerNameEl = document.getElementById("playerName");
let playerNumberEl = document.getElementById("playerNumber");
let pcNumberEl = document.getElementById("pcNumber");
let playerScoreEl = document.getElementById("playerScore");
let pcScoreEl = document.getElementById("pcScore");
let playerCard = document.getElementById("playerCard");
let pcCard = document.getElementById("pcCard");
let messageEl = document.getElementById("message");
let rollBtn = document.getElementById("rollBtn");
let restartBtn = document.getElementById("restartBtn");


let playerName = "";
let playerScore = 0;
let pcScore = 0;


function askName() {
  let name = prompt("Введи своє ім'я:");

  while (name === null || name.trim() === "" || !isNaN(name)) {
    name = prompt("Ім'я не може бути порожнім або числом. Введи ще раз:");
  }

  return name.trim();
}


function getRandom() {
  return Math.floor(Math.random() * 100) + 1;
}


function showNumber(element, number) {
  element.textContent = number;
  element.classList.remove("pop");
  void element.offsetWidth; // щоб анімація спрацьовувала кожен раз
  element.classList.add("pop");
}


function showMessage(text, color) {
  messageEl.textContent = text;
  messageEl.className = "message " + color;
}


function playRound() {
  let playerNum = getRandom();
  let pcNum = getRandom();

  showNumber(playerNumberEl, playerNum);
  showNumber(pcNumberEl, pcNum);


  playerCard.classList.remove("win", "lose");
  pcCard.classList.remove("win", "lose");

  if (playerNum > pcNum) {
    playerScore++;
    playerCard.classList.add("win");
    pcCard.classList.add("lose");
    showMessage("Ти виграв раунд!", "good");
  } else if (pcNum > playerNum) {
    pcScore++;
    pcCard.classList.add("win");
    playerCard.classList.add("lose");
    showMessage("Комп'ютер виграв раунд", "bad");
  } else {
    showMessage("Нічия", "draw");
  }

  playerScoreEl.textContent = playerScore;
  pcScoreEl.textContent = pcScore;


  if (playerScore === 3) {
    showMessage(playerName + ", ти переміг!", "good");
    rollBtn.disabled = true;
  } else if (pcScore === 3) {
    showMessage("Комп'ютер переміг", "bad");
    rollBtn.disabled = true;
  }
}


function restart() {
  playerScore = 0;
  pcScore = 0;
  playerScoreEl.textContent = 0;
  pcScoreEl.textContent = 0;
  playerNumberEl.textContent = "?";
  pcNumberEl.textContent = "?";
  playerCard.classList.remove("win", "lose");
  pcCard.classList.remove("win", "lose");
  rollBtn.disabled = false;
  showMessage("Натисни кнопку, щоб почати", "");
}

rollBtn.addEventListener("click", playRound);
restartBtn.addEventListener("click", restart);


window.addEventListener("load", function () {
  playerName = askName();
  playerNameEl.textContent = playerName;
});
