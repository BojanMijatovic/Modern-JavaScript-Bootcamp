
const todos = [
  { text: 'Learn React', completed: false },
  { text: 'Angular', completed: false },
  { text: 'Html 5', completed: true },
  { text: 'JavaScript', completed: false },
  { text: 'Redux', completed: false },
  { text: 'Css 3', completed: true },
  { text: 'JSON', completed: false },
  { text: 'React Native', completed: false }
];

const filters = {
  filteredText: ''
}

const renderTodos = (todos, filters) => {       // render todos and filters
  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(filters.filteredText.toLowerCase()));

  document.querySelector('#todos').innerHTML = '' // clean div

  filteredTodos.forEach(todo => {
    const newTodo = document.createElement('p');          // cerate elements with rendered todos
    newTodo.textContent = todo.text;
    document.querySelector('#todos').append(newTodo);
  })


  const incompleteTodos = filteredTodos.filter(todo => !todo.completed)                   // return num off incomplete todos
  const summary = document.createElement('h2');
  summary.textContent = `You have more ${incompleteTodos.length} todos to finish`;
  document.querySelector('#todos').append(summary);
}

renderTodos(todos, filters);

//  add todo  btn 
const addTodo = document.querySelector('#add-todo');
addTodo.addEventListener('click', () => console.log(`Btn was added`))

//search todo
const searchTodo = document.querySelector('#search-todo');
searchTodo.addEventListener('input', (e) => {
  filters.filteredText = e.target.value;
  renderTodos(todos, filters);
});
