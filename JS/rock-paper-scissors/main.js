document.addEventListener('DOMContentLoaded', () => {
  let rock = document.querySelector('.rock');
  let paper = document.querySelector('.paper');
  let scissors = document.querySelector('.scissors');
  let userScore = 0;
  let compScore = 0;
  let result = 'Draw';
  rock.addEventListener('click', () => {
    [userScore, compScore, result] = winner('rock', userScore, compScore);
    updateScore(userScore, compScore, result);
  });
  paper.addEventListener('click', () => {
    [userScore, compScore, result] = winner('paper', userScore, compScore);
    updateScore(userScore, compScore, result);
  });
  scissors.addEventListener('click', () => {
    [userScore, compScore, result] = winner('scissors', userScore, compScore);
    updateScore(userScore, compScore, result);
  });
});

function winner(choice, userScore, compScore) {
  let userChoice = choice;
  let compChoice = getComputerChoice();
  let result = 'Draw';
  updateChoice(userChoice, compChoice);
  switch (userChoice) {
    case 'rock':
      switch (compChoice) {
        case 'paper':
          compScore += 1;
          result = 'Lost';
          break;
        case 'scissors':
          userScore += 1;
          result = 'Win';
          break;
      }
      break;
    case 'paper':
      switch (compChoice) {
        case 'rock':
          userScore += 1;
          result = 'Win';
          break;
        case 'scissors':
          compScore += 1;
          result = 'Lost';
          break;
      }
      break;
    case 'scissors':
      switch (compChoice) {
        case 'rock':
          compScore += 1;
          result = 'Lost';
          break;
        case 'paper':
          userScore += 1;
          result = 'Win';
          break;
      }
      break;
  }
  return [userScore, compScore, result];
}

function updateChoice(userChoice, compChoice) {
  document.querySelector('.user-choice').innerHTML = `<i class="fa fa-hand-${userChoice}-o"></i`;
  document.querySelector('.comp-choice').innerHTML = `<i class="fa fa-hand-${compChoice}-o"></i>`;
}

function updateScore(userScore, compScore, result) {
  document.querySelector('.user-score').innerHTML = userScore;
  document.querySelector('.comp-score').innerHTML = compScore;
  document.querySelector('.result').innerHTML = result;
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}