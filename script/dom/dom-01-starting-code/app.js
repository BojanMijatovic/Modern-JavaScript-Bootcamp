
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

//  Input text
const input = document.querySelector('#inputValue');
//console.log(input.value);


const ul = document.querySelector('ul');

// console.log(ul.firstElementChild.hidden = true);

const li = document.querySelector('li');

// console.log(li.parentElement.parentElement);

console.log(ul.previousElementSibling);

// Style With DOM

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  // ul.classList.toggle('visible');
  ul.classList.toggle('invisible');
}
)

// Add new Element to html UL > LI
const test = 4;
const hed = document.createElement('li');
hed.classList = 'test';  // Add css CLASS
hed.innerHTML = `<ul>${test}</ul>`;

ul.appendChild(hed);

// Remove Child on list 
ul.removeChild(hed);


// Remove Element
// h1.remove();