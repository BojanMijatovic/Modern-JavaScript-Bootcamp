const notes = [];

// console.log(notes);
// notes.shift();
// let note = notes.indexOf('Feed cat');  // find index in array of notes

// findIndex work on obj.

// return index off obj from arr notes
const index = notes.findIndex((note, i) => note.title = 'Feed cat');  // find by title 
console.log(index);

const findNote = (notes, noteTitle) => {  // findNote is index of obj in array notes
  return notes.findIndex((note) => note.title === noteTitle);
}
// console.log(findNote(notes, 'Learn JS'));

// find Index method
// const noteObj = (notes, noteTitle) => {
//   const index = notes.findIndex(note => note.title.toLowerCase() === noteTitle.toLowerCase())
//   return notes[index];                             // return obj note  from array with index
// }


// Find array method 
const noteObj = (notes, noteTitle) => {
  return notes.find(note => note.title.toLowerCase() === noteTitle.toLowerCase())
  // return obj note  from array  notes  
}

// filter notes
const filteredNotes = notes.filter(note => note.title.toLowerCase().includes('js'));
// create new arr  from notes by filter title
console.log(filteredNotes);


// sort notes
const sortNotes = (notes) => {
  notes.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

sortNotes(notes);



// const note = noteObj(notes, 'go to gym');
// console.log(note);

console.log(notes);




