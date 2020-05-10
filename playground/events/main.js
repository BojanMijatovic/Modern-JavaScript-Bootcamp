const addNoteModal = document.querySelector('#add-note');
const note = document.querySelector('.note');
const backdrop = document.querySelector('.backdrop');
const cancelNoteBtn = document.querySelector('.notes__actions .cancel');
const successAddBtn = document.querySelector('.success');
const userInputs = note.querySelectorAll('input');

const notes = [];


const removeNoteHandler = (noteId) => {
  let notesIndex = 0;
  for (let note of notes) {
    if (note.id === noteId) {
      break;
    }
    notesIndex++;
  }
  notes.splice(notesIndex, 1);
  const notesList = document.querySelector('.notes-list');
  notesList.children[notesIndex].remove();
}



const renderNewNoteElement = (id, noteTitle, priority) => {
  const newNote = document.createElement('li');
  newNote.innerHTML = `
  <div> 
    <h2>${noteTitle}</h2>
    <p>${priority}/5</p>
  </div>  `;

  // remove single Note
  newNote.addEventListener('click', removeNoteHandler.bind(null, id));

  const notesList = document.querySelector('.notes-list');
  notesList.append(newNote);
}

const clearNoteInputs = () => {
  for (const input of userInputs) {
    input.value = ''
  }
}

const addNoteHandler = () => {
  note.classList.toggle('note-visible')   // show or hide note list
}

const showHideBackdrop = () => {
  addNoteHandler();
}

const closeNoteHandler = () => {
  addNoteHandler();
  clearNoteInputs();
}

const successAddBtnHandler = () => {
  const noteTitleValue = userInputs[0].value;
  const notePriority = userInputs[1].value;

  // validate input values
  if (noteTitleValue.trim() === '' || notePriority.trim() === '' || +notePriority < 1 || +notePriority > 5) {
    alert(`Please insert valid values`)
  }

  // newNote obj
  const newNote = {
    id: Math.random().toString(),
    title: noteTitleValue,
    priority: notePriority
  }
  notes.push(newNote)
  console.log(notes);

  clearNoteInputs();
  renderNewNoteElement(newNote.id, newNote.title, newNote.priority);   // insert values
  addNoteHandler();


}



addNoteModal.addEventListener('click', addNoteHandler);
backdrop.addEventListener('click', showHideBackdrop);
cancelNoteBtn.addEventListener('click', closeNoteHandler);
successAddBtn.addEventListener('click', successAddBtnHandler)