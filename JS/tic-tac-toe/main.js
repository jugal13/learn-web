let gameActive = true;
let gameStatus;
let gameStatusMessage;
let currentPlayer = "X";
let firstPlayer = "X";
let player1Name;
let player2Name;
let player1Score = 0;
let player2Score = 0;
let player1DisplayName;
let player2DisplayName;
let player1DisplayScore;
let player2DisplayScore;
let gameCurrentState = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const winningMessage = playerName =>
  `${playerName}(${currentPlayer})'s has won`;

const drawMessage = () => `Game has ended in a draw`;

const currentPlayerTurn = playerName =>
  `${playerName}(${currentPlayer})'s turn`;

const clearCells = () =>
  document.querySelectorAll(".cell").forEach(cell => (cell.innerHTML = ""));

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;

  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );

  if (gameCurrentState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameCurrentState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  playerName = currentPlayer == "X" ? player1Name : player2Name;
  gameStatus.innerHTML = currentPlayerTurn(playerName);
}

function handleResultValidation() {
  let roundWon = false;
  let winner;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameCurrentState[winCondition[0]];
    let b = gameCurrentState[winCondition[1]];
    let c = gameCurrentState[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      winner = a;
      break;
    }
  }
  if (roundWon) {
    gameActive = false;
    let playerName = winner == "X" ? player1Name : player2Name;
    if (winner == "X") {
      player1Score = `${parseInt(player1Score) + 1}`;
      player1DisplayScore.innerHTML = player1Score;
    } else {
      player2Score = `${parseInt(player2Score) + 1}`;
      player2DisplayScore.innerHTML = player2Score;
    }
    gameStatus.innerHTML = winningMessage(playerName);
    setTimeout(newGame, 2000);
    return;
  }

  let roundDraw = !gameCurrentState.includes("");
  if (roundDraw) {
    gameStatus.innerHTML = drawMessage();
    gameActive = false;
    setTimeout(newGame, 2000);
    return;
  }

  handlePlayerChange();
}

function newGame() {
  clearCells();
  firstPlayer = firstPlayer == "X" ? "O" : "X";
  currentPlayer = firstPlayer;
  let playerName = currentPlayer == "X" ? player1Name : player2Name;
  gameStatus.innerHTML = currentPlayerTurn(playerName);
  gameCurrentState = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
}

function handleRestartGame() {
  setPlayerNames();
  gameActive = true;
  currentPlayer = "X";
  gameCurrentState = ["", "", "", "", "", "", "", "", ""];
  gameStatus.innerHTML = currentPlayerTurn(player1Name);
  clearCells();
}

function setPlayerNames() {
  player1Name = prompt("Enter Player 1's name?", "Player1");
  player2Name = prompt("Enter Player 2's name?", "Player2");
  player1DisplayName.innerHTML = player1Name;
  player2DisplayName.innerHTML = player2Name;
}

document.addEventListener("DOMContentLoaded", () => {
  gameStatusMessage = document.querySelector(".game-current-status");
  player1DisplayName = document.querySelector(".game-player1");
  player2DisplayName = document.querySelector(".game-player2");
  player1DisplayScore = document.querySelector(".game-player1-score");
  player2DisplayScore = document.querySelector(".game-player2-score");
  gameStatus = document.querySelector(".game-current-status");

  document
    .querySelectorAll(".cell")
    .forEach(cell => cell.addEventListener("click", handleCellClick));

  document
    .querySelector(".game-restart")
    .addEventListener("click", handleRestartGame);

  setPlayerNames();

  setTimeout(() => {
    gameStatus.innerHTML = currentPlayerTurn(player1Name);
  }, 800);
});
