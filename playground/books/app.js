let books = []

const bookJSON = localStorage.getItem('books')

if (bookJSON !== null) {
  books = JSON.parse(bookJSON);
}

const saveBook = () => {
  return localStorage.setItem('books', JSON.stringify(books))
}

const showBook = (books) => {
  const booksList = document.querySelector('.booksList');
  booksList.innerHTML = ' '
  books.forEach(book => {
    const newBook = document.createElement('p'); // create new book
    newBook.innerHTML = `${book.nameBook} from author ${book.writer}`

    booksList.append(newBook);
    saveBook();
  })
}

const formBooks = document.querySelector('#formBooks');

formBooks.addEventListener('submit', (e) => {
  e.preventDefault();
  books.push({
    nameBook: e.target.elements.addBook.value,
    writer: e.target.elements.addWriter.value
  })
  e.target.elements.addBook.value = '';
  e.target.elements.addWriter.value = '';
  showBook(books);
  saveBook();
})

showBook(books)



