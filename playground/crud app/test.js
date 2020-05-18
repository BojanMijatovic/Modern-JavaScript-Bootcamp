const notes = [];

const addNotes = (title, completed) => {
  notes.push({ title: title, completed: completed })
}

addNotes('New', false)
addNotes('New lessons', true)
addNotes('html and css', true)
addNotes('learn js', false)
addNotes('learn react.js', false)
// console.log(notes);

// show all notes
const showAllNotes = (notes) => {
  notes.forEach((note, id) => {
    return console.log(`${id + 1} ${note.title}`);
  })
}

// find completed notes
const findCompletedNotes = (notes) => {
  return notes.filter(note => note.completed === true);
}
console.log(findCompletedNotes(notes));

//  remove single item
const removeSingleItem = (notes, noteTitle) => {
  const noteI = notes.findIndex(note => note.title === noteTitle)
  return notes.splice(noteI, 1);
}

removeSingleItem(notes, 'New');
console.log(notes);

// filter notes
const filterByTitle = (notes, filter) => {
  return notes.filter(note => note.title.includes(filter))
}

console.log(filterByTitle(notes, 'js'));
showAllNotes(notes)

