let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

function updateScore(result) {
  if (result === 'You Win') {
    score.wins += 1;
  } else if (result === 'You Lose') {
    score.losses += 1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }
  localStorage.setItem('score', JSON.stringify(score));
}

function rockBtn() {
  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
  console.log(computerMove);

  let result = ''
  if (computerMove === 'Rock') {
    result = 'Tie';
  } else if (computerMove === 'Paper') {
    result = 'You Lose';
  } else if (computerMove === 'Scissors') {
    result = 'You Win';
  }

  updateScore(result);

  alert(`You picked rock. Computer picked ${computerMove}. ${result}.
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function paperBtn() {
  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
  console.log(computerMove);

  let result = '';
  if (computerMove === 'Rock') {
    result = 'You Win';
  } else if (computerMove === 'Paper') {
    result = 'Tie';
  } else if (computerMove === 'Scissors') {
    result = 'You Lose';
  }

  updateScore(result);

  alert(`You picked paper. Computer picked ${computerMove}. ${result}.
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}
function scissorsBtn() {
  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
  console.log(computerMove);

  let result = '';
  if (computerMove === 'Rock') {
    result = 'You Lose';
  } else if (computerMove === 'Paper') {
    result = 'You Win';
  } else if (computerMove === 'Scissors') {
    result = 'Tie';
  }

  updateScore(result);

  alert(`You picked Scissors. Computer picked ${computerMove}. ${result}.
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}


function resetBtn() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.setItem("score", JSON.stringify(score));
}

// const mixedArray = ['apple', 5, 'banana', 10, 'orange', 15, 'grape', 20, 'kiwi', 25, 'melon', 30, 'pear', 35, 'peach', 40, 'plum', 45, 'cherry', 50];

// End goal: You should have 2 arrays. One containing strings and the other containing the numbers. The content of both arrays should be in asc order.
/*
const mixedArray =['apple', 5, 'banana', 10, 'orange', 15, 'grape', 20, 'kiwi', 25, 'melon', 30, 'pear', 35, 'peach', 40, 'plum', 45, 'cherry', 50];

const numArray = mixedArray.filter(num => typeof num === 'number');
console.log(numArray);

const strArray = mixedArray.filter(word => typeof word === 'string');
strArray.sort();
console.log(strArray);
*/
