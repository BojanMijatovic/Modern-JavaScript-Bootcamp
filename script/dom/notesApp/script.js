const notes = [{
  title: 'Learn Js',
  body: 'Start with Node.js'
},
{
  title: 'React Js',
  body: 'Start with full front end'
}, {
  title: 'Dom practice',
  body: 'work on simple projects'
}]

const p = document.querySelector('p');
// p.remove();

//  Add all p tags in one element
const allP = document.querySelectorAll('p');
//  Remove all p tags
// allP.forEach(p => p.remove());

// allP.forEach(p => p.textContent = `*****`);

// const newP = document.createElement('p');
// newP.textContent = `This is new paragraph`;

// document.body.append(newP);

const addBtn = document.getElementById('create-note');
const removeBtn = document.getElementById('remove-note');


//  add notes
const addNote = (e) => {
  e.target.textContent = 'This is new btn';
}

//  Remove all notes
const removeAllNotes = () => {
  // document.querySelectorAll('.note').forEach(note => note.remove());

  const notes = document.querySelectorAll('.note'); // more elegant for me
  notes.forEach(note => note.remove());
}




addBtn.addEventListener('click', addNote);
removeBtn.addEventListener('click', removeAllNotes)