const addNoteModal = document.querySelector('#add-note');
const note = document.querySelector('.note');
const backdrop = document.querySelector('.backdrop');
const cancelNoteBtn = document.querySelector('.notes__actions .cancel');


const addNoteHandler = () => {
  note.classList.toggle('note-visible')   // show or hide note list
  //  showBackdropToggle()
}

// const showBackdropToggle = () => {   // backdrop
//   backdrop.classList.toggle('backdrop-visible');
// }

const showHideBackdrop = () => {
  addNoteHandler();
}


addNoteModal.addEventListener('click', addNoteHandler);
backdrop.addEventListener('click', showHideBackdrop);
