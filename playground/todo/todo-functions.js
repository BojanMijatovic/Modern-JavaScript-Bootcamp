let todos = [];

// get saved todos
const getSavedTodos = () => {
  const todoJSON = localStorage.getItem('todos');
  if (todoJSON !== null) {
    todos = JSON.parse(todoJSON);
  } else {
    return []
  }
}


//  Remove todo by id
const removeTodo = (id) => {
  const todoIndex = todos.findIndex(todo => todo.id === id)
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}


// generate new todo
const generateNewTodo = (todo) => {
  const newTodo = document.createElement('div');        // cerate root el with rendered todos
  const checkTodo = document.createElement('input');
  const todoText = document.createElement('span');
  checkTodo.type = 'checkbox';

  checkTodo.checked = todo.completed;

  // setup remove btn
  const removeTodoBtn = document.createElement('button');
  removeTodoBtn.textContent = 'x';
  removeTodoBtn.addEventListener('click', (e) => {  // call  function to remove todo
    removeTodo(todo.id);
    saveTodo(todos);
    renderTodos(todos, filters);
  })
  newTodo.append(checkTodo);
  todoText.textContent = todo.text;   // add text value 
  newTodo.append(todoText);
  newTodo.append(removeTodoBtn);

  return newTodo;
}


// render Todos
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
    document.querySelector('#todos').append(generateNewTodo(todo));
  })

  const incompleteTodos = filteredTodos.filter(todo => !todo.completed)                   // return num off incomplete todos
  const summary = document.createElement('h2');
  summary.textContent = `You have more ${incompleteTodos.length} todos to finish`;
  document.querySelector('#todos').append(summary);
}

//save Todo
const saveTodo = () => {
  return localStorage.setItem('todos', JSON.stringify(todos));
}
