
function rockBtn() {
  let computerMove = ''
  const randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  }
  else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  }
  else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
  console.log(computerMove)

  let result = '';
  if (computerMove === 'Rock') {
    result = 'Tie';}
    else if (computerMove === 'Paper') {
      result = 'You Lose';
    }
    else if (computerMove ==='Scissors') {
      result = 'You Win';
    }
    alert(`You picked rock. Computer picked ${computerMove}. ${result}.`)
}


function paperBtn() {
  let computerMove = ''
  const randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  }
  else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  }
  else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
  console.log(computerMove)

  let result = '';
  if (computerMove === 'Rock') {
    result = 'You win';}
    else if (computerMove === 'Paper') {
      result = 'Tie';
    }
    else if (computerMove ==='Scissors') {
      result = 'You Lose';
    }
    alert(`You picked paper. Computer picked ${computerMove}. ${result}.`)
}
function scissorsBtn() {
  let computerMove = ''
  const randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  }
  else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  }
  else if (randomNumber > 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
  console.log(computerMove)

  let result = '';
  if (computerMove === 'Rock') {
    result = 'You Lose';}
    else if (computerMove === 'Paper') {
      result = 'You Win';
    }
    else if (computerMove ==='Scissors') {
      result = 'Tie';
    }
    alert(`You picked Scissor. Computer picked ${computerMove}. ${result}.`)
}
