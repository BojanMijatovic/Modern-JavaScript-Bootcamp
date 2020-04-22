getSavedTodos();

const filters = {
  filteredText: '',
  hideCompleted: false
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
  saveTodo(todos);
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