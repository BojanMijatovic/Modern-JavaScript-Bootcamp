const notes = [{
  title: 'Learn Js',
  body: 'Start with Node.js'
},
{
  title: 'React Js',
  body: 'Start with full front end'
}, {
  title: 'Dom practice',
  body: 'work on simple projects'
}]

const p = document.querySelector('p');
// p.remove();

//  Add all p tags in one element
const allP = document.querySelectorAll('p');
//  Remove all p tags
// allP.forEach(p => p.remove());

// allP.forEach(p => p.textContent = `*****`);

// const newP = document.createElement('p');
// newP.textContent = `This is new paragraph`;

// document.body.append(newP);

const searchNote = document.getElementById('search-note');
const addBtn = document.getElementById('create-note');
const removeBtn = document.getElementById('remove-note');
const notesList = document.querySelector('.notes');

//  Change Btn
const changeBtn = () => {
  addBtn.textContent = 'Add Btn'
}

//  Remove all notes
const removeAllNotes = () => {
  // document.querySelectorAll('.note').forEach(note => note.remove());

  notesList.remove();  // more elegant for me
}




const filters = {
  searchText: ''
}

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

  notesList.innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteEl = document.createElement('p');
    noteEl.textContent = note.title;
    notesList.append(noteEl);
  }
  )
};


renderNotes(notes, filters);

//  Search Input
searchNote.addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
})


addBtn.addEventListener('click', changeBtn);
removeBtn.addEventListener('click', removeAllNotes);



