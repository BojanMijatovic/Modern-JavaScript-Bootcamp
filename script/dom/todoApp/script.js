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

// const allP = document.querySelectorAll('p');

// allP.forEach(p => {
//   if (p.textContent.includes('Work')) {
//     p.remove();
//   }
// })

const todosList = document.getElementById('todo-list');



const filters = {
  filteredTodos: ''
}

const renderTodos = (todos, filter) => {
  const matchTodos = todos.filter((todo) => {
    todo.toLowerCase().includes(filter.filteredTodos.toLowerCase())
  })
  todosList.innerHTML = ''
}


//  count todos 
const todoCount = () => {

  todos.forEach(todo => {
    if (todo.completed === false) {
      const newP = document.createElement('p');
      newP.textContent = `You have ${todo.text} to complete`;
      document.body.append(newP);
    }
  })
}

todoCount(todos);

//  filter todos
const filterIncompleteTodos = todos.filter(todo => !todo.completed);


const filterTodos = document.createElement('h2');
filterTodos.textContent = `You have more ${filterIncompleteTodos.length} to complete`;
todosList.append(filterTodos);

const btn = document.getElementById('add-btn');
const searchTodo = document.getElementById('search-todo');

//  Add btn
const addBtn = () => {
  console.log('add todo');
}

btn.addEventListener('click', addBtn);

searchTodo.addEventListener('input', (e) => {
  console.log(e.target.value);
})