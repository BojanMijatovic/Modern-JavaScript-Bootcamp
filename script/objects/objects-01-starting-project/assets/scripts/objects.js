const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movies = [];


//  Render Movie
const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter))


  filteredMovies.forEach((movie) => {
    const moveEl = document.createElement('li');
    let text = movie.info.title + ' - ';

    for (const key in movie.info) {   //  Dynamic Properties
      if (key !== 'title') {
        text = text + `${key}: ${movie.info[key]}`
      }
    }
    moveEl.textContent = text; //Outputting Dynamic Properties
    movieList.append(moveEl);
  }
  )
}

//  Add Movie
const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value; // Dynamic Properties
  const extraValue = document.getElementById('extra-value').value;

  //  Validation
  if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
    alert('Please insert values')
  }

  //   New Movie obj
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue //  Dynamic stored Name
    },
    id: Math.random()
  }
  movies.push(newMovie);
  renderMovies();
}

// Search Movie

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm)
}



addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);