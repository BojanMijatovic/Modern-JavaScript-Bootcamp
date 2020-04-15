const notes = [
  { title: 'Feed cat', body: 'Bring food' },
  { title: 'Learn JS', body: 'Work every day on JS' },
  { title: 'Go to gym', body: 'Practice when you have spare time' },
  { title: 'Walk to center', body: 'Take a walk' },
  { title: 'Learn fucking JS !!', body: ' Work clever and always' }
];


console.log(notes);

// notes.shift();

let note = notes.indexOf('Feed cat');  // find index in array of notes



// findIndex work on obj.
const index = notes.findIndex((note, i) => note.title = 'Feed cat');  // find by title 
console.log(index);
