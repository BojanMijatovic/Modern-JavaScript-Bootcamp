const todos = [
  {
    text: 'Work with Dom',
    completed: false
  }, {
    text: 'Basic JS',
    completed: true
  }, {
    text: 'React JS',
    completed: false
  }, {
    text: 'Learn Node.js',
    completed: false
  }
]

const allP = document.querySelectorAll('p');

allP.forEach(p => {
  if (p.textContent.includes('Work')) {
    p.remove();
  }
})