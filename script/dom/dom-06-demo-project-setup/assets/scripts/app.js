
const startAddMovie = document.getElementById('add-movie');

const modal = document.getElementById('add-modal');


startAddMovie.addEventListener('click', () => {
  console.log(modal);
  modal.classList = '.modal.visible';
}
)