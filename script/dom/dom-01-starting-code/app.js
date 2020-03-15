
const p = document.createElement('p');

p.innerText = 'New to Dom';

p.className = 'test';

document.body.appendChild(p);

// Get element by ID selector 
// const title = document.getElementById('main-title');
// console.log(title);

// console.dir(title)

//querySelector ALL!! ali items with that class
const list = document.querySelectorAll('.list-items');
console.log(list);

//  Change property with class

const h1 = document.querySelector('#main-title');
h1.innerText = 'New Title on DOM';
h1.className = 'title';