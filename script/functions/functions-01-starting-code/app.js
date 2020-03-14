const startGameBtn = document.getElementById('start-game-btn');


//  Function Expression
// Anonymous function 
// const start = function () {
//   console.log('Game is start');
// }

//  Function Declaration
//   function startGame() {
//   console.log('Game is start');
// }


const rock = 'rock';
const papier = 'papier';
const scissors = 'scissors';
const defUserChoice = 'rock'

const draw = 'draw';
const playerWin = 'Player is Winner';
const compWin = 'Computer is Winner';

let gameIsRun = false;

const getStartGame = function () {
  const selection = prompt(`${rock} ${papier} ${scissors}`, '').toLowerCase();
  if (selection !== rock && selection !== papier && selection !== scissors) {
    alert(`Sorry you need to use some off papier , rock , scissors , we choose for you  ${defUserChoice}`)
    return defUserChoice;
  }
  return selection;
}

const getCompChoice = function () {
  const radomValue = Math.random();
  if (radomValue < 0.34) {
    return rock;
  } else if (radomValue < 0.67) {
    return papier;
  } else {
    return scissors;
  }
}


const getWinner = function (cChoice, uChoice) {
  if (cChoice === uChoice) {
    return draw;
  } else if (cChoice === rock && uChoice === papier || cChoice === papier && uChoice === scissors || cChoice === scissors && uChoice === rock) {
    return playerWin
  } else {
    return compWin
  }
}


startGameBtn.addEventListener('click', function () {
  if (gameIsRun) {
    return;
  }
  gameIsRun = true;
  const playerSelection = getStartGame();
  const getComputerChoice = getCompChoice();
  const winner = getWinner(getComputerChoice, playerSelection);
  console.log(winner);
});