
const btnId = document.getElementById('btnSubmit');

//console.log(btnId);

const lists = document.getElementsByTagName('p');
// console.log(lists);


const title = document.querySelector('h1');
// console.log(title);
console.log(title.innerText);

title.innerText = 'Test Js and Dom';


// const paragraph = document.querySelectorAll('p');
// console.log(paragraph);

let li = document.querySelectorAll('.list-items');
for (let item of li) {
  // console.log(item);
  item.style.color = 'red';
  item.innerText = 'Test'.toUpperCase();
}


const ul1 = document.querySelector('.list');

// ul.children[0].innerText = 'Here is my first Dom';


// ul.innerText = 'New Dom';

// const form = document.querySelector('form');
// form.innerHTML = '<p> New form</p>';
// console.log(form);

// const inputs = document.querySelector('form');
// console.log(inputs[0].value);


// const atr = document.querySelector('input[type="range"]');

// console.log(atr.getAttribute('min'));


// const listsI = document.querySelectorAll('.list-items');

// for (let list of listsI) {
//   list.innerText = 'I will LEARN THAT JS!!!!'
// }

const p = document.querySelector('.text-center');

// p.style.color = 'white';
// p.style.backgroundColor = 'blue';


// const newLi = document.querySelectorAll('.testing');

// for (const li of newLi) {
//   li.style.color = 'green';
//   li.style.fontSize = '2rem';
//   li.style.backgroundColor = 'yellow';
// }



// const todos = document.querySelector('.todos');
// console.log(todos);

// todos.classList.toggle('doneTodo');
// todos.classList.add('doneTodo');

// todos.classList.toggle('doneTodo');

// const start = document.createElement('p');
// start.innerText = 'Test JS';

// start.classList.add('starting');

// console.log(start);

// todos.appendChild(start);

// const todos = document.querySelector('.todos')

// const addTodo = document.createElement('p');
// addTodo.innerText = 'New code is on';
// addTodo.classList.add('startTodo');

// todos.appendChild(addTodo);

// todos.style.color = 'blue';
// // console.log(todos);


// const test = document.querySelectorAll('.testing li');
// console.log(test);

// for (const item of test) {
//   item.style.fontSize = '2rem';
// }


// const todo = document.querySelectorAll('.todo');

// console.log(todo);


// const test = document.querySelector('.testing');

// console.log(test);

// const removeMe = document.querySelector('.special');
// console.log(removeMe);

// const deleteMe = test.removeChild(removeMe)

// console.log(deleteMe);


const removeMe = document.querySelector('.special');

removeMe.remove();