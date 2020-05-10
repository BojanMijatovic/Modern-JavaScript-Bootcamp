const openBookBtn = document.querySelector('#add-book');
const book = document.querySelector('.book');
const addNewBook = document.querySelector('#new-book')

const books = [];

const openBookModal = () => {
  book.classList.toggle('book-visible');
  document.querySelector('h2').style.display = 'none';
}

const addNewBookHandler = () => {
  openBookModal();

  const newBook = {};
}


openBookBtn.addEventListener('click', openBookModal);
addNewBook.addEventListener('click', addNewBookHandler);