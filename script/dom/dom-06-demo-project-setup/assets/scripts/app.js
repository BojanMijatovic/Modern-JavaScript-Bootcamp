
const startAddMovie = document.getElementById('add-movie');
const addModal = document.getElementById('add-modal');
const cancelMovieBtn = document.querySelector('#add-modal .btn--passive');
const addMovieBtn = document.querySelector('#add-modal .btn--success');
const userInputs = addModal.querySelectorAll('input');
const movies = [];

//  Show backDrop 
const backdrop = document.getElementById('backdrop');
const showBackdropToggle = () => {
  backdrop.classList.toggle('visible');
}


//  Show or hide movie modal
const toggleMovieModal = () => {
  addModal.classList.toggle('visible');
  showBackdropToggle();
}

// cancel backDrop 
const backdropClickHandler = () => {
  toggleMovieModal();
}

//  Cancel addMovie 
const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInputs();
}


//  Clear inputs
const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
}



//  Add Movie
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imgValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  //  validation values
  if (titleValue.trim() === '' || imgValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
    alert('Please insert valid values form 1 to 5');
  }

  const newMovie = {
    title: titleValue,
    img: imgValue,
    rating: ratingValue
  }
  //  Add new move to array of MOVIES
  movies.push(newMovie);
  console.log(movies);
  clearMovieInputs();
  toggleMovieModal();
}


startAddMovie.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelMovieBtn.addEventListener('click', cancelAddMovieHandler);
addMovieBtn.addEventListener('click', addMovieHandler);