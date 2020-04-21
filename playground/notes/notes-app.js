// document obj model
const notes = [
  { title: 'Feed cat', body: 'Bring food' },
  { title: 'Learn JS', body: 'Work every day on JS' },
  { title: 'Go to gym', body: 'Practice when you have spare time' },
  { title: 'Walk to center', body: 'Take a walk' },
  { title: 'Learn fucking JS !!', body: ' Work clever and always' },
  { title: 'Attack on Dom JS  :)', body: ' Work clever and always' }
];

const filters = {
  searchText: ''
}

const user = {
  name: 'Alex',
  age: 32
}

const userJSON = JSON.stringify(user);

localStorage.setItem('user', userJSON);

const objUser = JSON.parse(localStorage.getItem('user'));
console.log(objUser.name);


localStorage.setItem('name', 'Alex');
localStorage.setItem('location', 'Minnesota');  //create  Item on local storage
console.log(localStorage.getItem('location'));  // read data from local storage
localStorage.removeItem('location'); // remove data from storage
// localStorage.clear() // remove all data from storage



const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(note => {
    const noteEl = document.createElement('p');
    noteEl.textContent = note.title;
    document.querySelector('#notes').append(noteEl);
  })
}

renderNotes(notes, filters);

//  add new element
// const newP = document.createElement('p');  // create new element
// newP.textContent = `New note`;                     // add value to new El
// document.body.append(newP);                     // append element to html

//add create note btn
const addNote = document.querySelector('#create-note');
addNote.addEventListener('click', (e) => console.log(`Note was added`))

// search-notes
const searchNote = document.querySelector('#search-text');
searchNote.addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})


// form 
// const formId = document.querySelector('#name-form');
// formId.addEventListener('submit', (e) => {
//   e.preventDefault();                                  
//   console.log(e.target.elements.firstName.value);
//   e.target.elements.firstName.value = ''
// });

//   check box
// const checkBox = document.querySelector('#test');
// checkBox.addEventListener('change', (e) => {
//   console.log(e.target.checked);            // for check box we use  --e.target.checked
// })


// sort by dropdown 
const dropDown = document.querySelector('#filter-by');
dropDown.addEventListener('change', (e) => {
  console.log(e.target.value);                         // for dropdown  we use  --e.target.value
})