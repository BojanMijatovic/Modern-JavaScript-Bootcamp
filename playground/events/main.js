const addNoteModal = document.querySelector('#add-note');
const note = document.querySelector('.note');

const addNoteHandler = () => {
  note.classList.toggle('visible')
}


addNoteModal.addEventListener('click', addNoteHandler)