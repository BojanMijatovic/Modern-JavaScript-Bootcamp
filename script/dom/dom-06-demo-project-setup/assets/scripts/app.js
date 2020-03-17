
const startAddMovie = document.getElementById('add-movie');
const modal = document.getElementById('add-modal');
const cancelMovieBtn = document.querySelector('#add-modal .btn--passive');


//  Show backDrop 
const backdrop = document.getElementById('backdrop');
const showBackdropToggle = () => {
  backdrop.classList.toggle('visible');
}


//  Show or hide movie modal
const toggleMovieModal = () => {
  modal.classList.toggle('visible');
  showBackdropToggle();
}

// cancel backDrop 
const backdropClickHandler = () => {
  toggleMovieModal();
}

//  Cancel addMovie 
const cancelAddMovie = () => {
  toggleMovieModal();
}

startAddMovie.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelMovieBtn.addEventListener('click', cancelAddMovie);
