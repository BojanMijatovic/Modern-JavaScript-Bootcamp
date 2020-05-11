const openBookBtn = document.querySelector('#add-book');
const book = document.querySelector('.book');
const addNewBook = document.querySelector('#new-book')
const books = [];

const openBookModal = () => {
  book.classList.toggle('book-visible');
  document.querySelector('h2').style.display = 'none';
}

// render Single Book
const renderNewBookHandler = (title, writer, year) => {
  const bookElement = document.createElement('li');
  const bookList = document.querySelector('.book-list');
  bookList.classList.add('list');
  bookElement.innerHTML = `
    <h3 class="list-title">Title : ${title}</h3>
    <h4 class="list-writer">Writer : ${ writer}</h4>
    <p class="list-year">Year off publish : ${ year}</p>
  `;
  bookList.append(bookElement);
}



const addNewBookHandler = () => {
  const bookTitle = document.querySelector('#book');
  const bookWriter = document.querySelector('#writer');
  const bookYear = document.querySelector('#year-publish');

  // create obj
  const newBook = {
    title: bookTitle.value,
    writer: bookWriter.value,
    year: bookYear.value
  };

  //validation
  if (newBook.title.trim() === '' || newBook.writer.trim() === '' || newBook.year.trim() === '') {
    alert('Insert real values')
  }

  // clear inputs 
  const clearInput = () => {
    bookTitle.value = '';
    bookWriter.value = '';
    bookYear.value = ''
  }

  books.push({ newBook })

  renderNewBookHandler(newBook.title, newBook.writer, newBook.year)
  openBookModal();
  clearInput();
}


openBookBtn.addEventListener('click', openBookModal);
addNewBook.addEventListener('click', addNewBookHandler);