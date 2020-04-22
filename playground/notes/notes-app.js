// document obj model
const notes = getSavedNotes();

const filters = {
  searchText: ''
}

// const userJSON = JSON.stringify(user);  // JSON files
// localStorage.setItem('user', userJSON);
// const objUser = JSON.parse(localStorage.getItem('user'));

// localStorage.setItem('name1', 'Alex');
// localStorage.setItem('location', 'Minnesota');  //create  Item on local storage  ----and update same item
// console.log(localStorage.getItem('location'));  // read data from local storage
// localStorage.removeItem('location'); // remove data from storage
//localStorage.clear() // remove all data from storage all value

renderNotes(notes, filters);

//               --------DOM 
//  add new element
// const newP = document.createElement('p');  // create new element
// newP.textContent = `New note`;                     // add value to new El
// document.body.append(newP);                     // append element to html

//add create note btn       -------          addEventListener
const addNote = document.querySelector('#create-note');
addNote.addEventListener('click', (e) => {
  notes.push({ title: '', body: '' })
  saveNote(notes)
  renderNotes(notes, filters);
})

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