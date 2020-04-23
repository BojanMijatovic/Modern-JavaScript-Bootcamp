console.log(uuidv4());


// read from local storage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');
  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

// Remove function

const removeNote = (id) => {
  const noteIndex = notes.findIndex(note => note.id === id);
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
  }
}


//  Generate dom structure for note
const generateNoteDom = (note) => {
  const noteEl = document.createElement('div');
  const textEl = document.createElement('a');
  const btn = document.createElement('button');

  btn.textContent = 'x';
  noteEl.append(btn);

  // remove Btn 
  btn.addEventListener('click', () => {
    removeNote(note.id);
    saveNote(notes);
    renderNotes(notes, filters);
  })

  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = `Unnamed  note`;
  }
  textEl.setAttribute(`href`, `edit.html#${note.id}`);
  noteEl.append(textEl);
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
