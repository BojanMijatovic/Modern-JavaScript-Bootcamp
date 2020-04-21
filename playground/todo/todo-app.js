
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
  filteredText: '',
  hideCompleted: false
}

const renderTodos = (todos, filters) => {       // render todos and filters
  let filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(filters.filteredText.toLowerCase()));

  filteredTodos = filteredTodos.filter(todo => {
    return !filters.hideCompleted || !todo.completed  // second solution
    // if (filters.hideCompleted) {
    //   return !todo.completed
    // } else {
    //   return true
    // }
  })
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

//search todo
const searchTodo = document.querySelector('#search-todo');
searchTodo.addEventListener('input', (e) => {
  filters.filteredText = e.target.value;
  renderTodos(todos, filters);
});

//  form
const formTodo = document.querySelector('#form-todos');
formTodo.addEventListener('submit', (e) => {
  e.preventDefault();
  todos.push({ 'text': e.target.elements.addTodos.value, 'completed': false })
  renderTodos(todos, filters);
  e.target.elements.addTodos.value = '';
})


//check box 
const hideCompleted = document.querySelector('#hide');
hideCompleted.addEventListener('change', (e) => {
  console.log(e.target.checked);
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters);
})