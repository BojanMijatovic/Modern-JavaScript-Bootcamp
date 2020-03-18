const startAddMovie = document.getElementById('add-movie');
const addModal = document.getElementById('add-modal');
const cancelMovieBtn = document.querySelector('#add-modal .btn--passive');
const addMovieBtn = document.querySelector('#add-modal .btn--success');
const userInputs = addModal.querySelectorAll('input');
const sectionText = document.getElementById('entry-text');
const movies = [];

//  update UI
const updateUI = () => {
  if (movies.length === 0) {
    sectionText.style.display = 'block';
  } else {
    sectionText.style.display = 'none';
  }
}

// Confirm Delete Movie 
const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
}


//  Delete Movie
const deleteMovieHandler = (movieId) => {
  deleteMovie(movieId);
}


const renderNewMovie = (id, title, imgUrl, rating) => {
  const newMovieEl = document.createElement('li');
  newMovieEl.className = 'movie-element';
  newMovieEl.innerHTML = `
    <div class="movie-element__image">
      <img src="${imgUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieEl.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieEl);
}



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
    id: Math.random().toString(),
    title: titleValue,
    img: imgValue,
    rating: ratingValue
  }

  //  Add new move to array of MOVIES
  movies.push(newMovie);
  console.log(movies);
  //  Call function when is complete add movie
  clearMovieInputs();
  toggleMovieModal();
  renderNewMovie(newMovie.id, newMovie.title, newMovie.img, newMovie.rating);
  updateUI();
}

startAddMovie.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelMovieBtn.addEventListener('click', cancelAddMovieHandler);
addMovieBtn.addEventListener('click', addMovieHandler);