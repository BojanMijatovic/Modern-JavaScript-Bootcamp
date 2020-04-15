
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

const deleteTodo = (todos, todoTitle) => {  // remove obj form array todos by text value
  const todoIndex = todos.findIndex(todo => todo.text.toLowerCase() === todoTitle.toLowerCase());
  if (todoIndex >= 0) {
    todos.splice(todoIndex, 1)
  }
}

deleteTodo(todos, 'angular');
deleteTodo(todos, 'redux');


// filtering todos
const getThingsToDo = () => { // return new array with todos are false
  return todos.filter(todo => !todo.completed)
}


// sort todos 
const sortingTodos = (todos) => {
  todos.sort((a, b) => {
    if (a.completed < b.completed) {
      return -1
    } else if (b.completed < a.completed) {
      return 1
    } else {
      return 0
    }
  })
}


sortingTodos(todos)
console.log(todos);


console.log(getThingsToDo(todos));


