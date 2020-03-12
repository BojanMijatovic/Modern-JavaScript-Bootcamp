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


const getStartGame = function () {
  const selection = prompt('Papier , Rock , Scissors', '');
  if (selection !== rock && selection !== papier && selection !== scissors) {
    return alert(`Sorry you need to use some off Papier , Rock , Scissors`)
  }
  return selection;
}



startGameBtn.addEventListener('click', function () {
  const playerSelection = getStartGame();
  console.log(playerSelection);
});