
const noteValue = document.querySelector('#add-note');
const btnNote = document.querySelector('#new-note');
const notesList = document.querySelector('.notes');
const searchNote = document.querySelector('#search');
const searchBtn = document.querySelector('.findNote');
const findNotesList = document.querySelector('.searchItems');
const notes = [];

const newNoteHandler = () => {
  const newNote = { text: noteValue.value }
  const noteItem = document.createElement('p');
  noteItem.textContent = noteValue.value
  notesList.append(noteItem);
  notes.push(newNote);
}

const clearNote = () => {
  noteValue.value = ''
}


const listNotesHandlers = () => {
  newNoteHandler();
  clearNote();
}


const searchHandler = () => {
  const noteValue = searchNote.value;
  return notes.findIndex(note => note.text === noteValue);

}

console.log(notes);



btnNote.addEventListener('click', listNotesHandlers);
searchBtn.addEventListener('click', searchHandler)