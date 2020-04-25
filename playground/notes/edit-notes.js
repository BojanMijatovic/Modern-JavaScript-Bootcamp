const noteId = location.hash.substring(1);
const notes = getSavedNotes();
const note = notes.find(note => note.id === noteId);

const noteTitle = document.querySelector('#note-title');
const noteBody = document.querySelector('#note-body');
const removeBtn = document.querySelector('#remove-note');

if (note === undefined) {
  location.assign('index.html');
}


noteTitle.addEventListener('input', (e) => {
  note.title = e.target.value;
  saveNote(notes);
})

noteBody.addEventListener('input', (e) => {
  note.body = e.target.value;
  saveNote(notes)
})


removeBtn.addEventListener('click', (e) => {
  removeNote(note.id);
  saveNote(notes);
  location.assign('index.html');
});