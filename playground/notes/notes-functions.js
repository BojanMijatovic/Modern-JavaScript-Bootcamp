// read from local storage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');
  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}


//  Generate dom structure for note
const generateNoteDom = (note) => {
  const noteEl = document.createElement('p');
  const btn = document.createElement('button');
  btn.textContent = 'x';
  if (note.title.length > 0) {
    noteEl.textContent = note.title;
  } else {
    noteEl.textContent = `Unnamed  note`;
  }

  noteEl.append(btn);
  return noteEl;
}

//  render notes
const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));
  document.querySelector('#notes').innerHTML = '';
  filteredNotes.forEach(note => {
    const noteEl = generateNoteDom(note);
    document.querySelector('#notes').append(noteEl);
  })
}


// save notes to local storage
const saveNote = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
}
