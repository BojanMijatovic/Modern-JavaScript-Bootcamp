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
//  Change property with class
const h1 = document.querySelector('#main-title');
h1.innerText = 'New Title on DOM';
h1.className = 'title';


//console.log(input.value);


const ul = document.querySelector('ul');

// console.log(ul.firstElementChild.hidden = true);

const li = document.querySelector('li');

// console.log(li.parentElement.parentElement);

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

const items = [];

const addBtn = document.getElementById('add-item');


const addItem = () => {
  //  Input text
  const input = document.querySelector('#inputValue').value;
  const newUl = document.querySelector('.newItems');

  //  Validation
  if (input.trim() === '') {
    alert('Please insert some item')
  }

  const newLi = document.createElement('p');
  newLi.textContent = input;
  newUl.append(newLi);

  items.push(input);

}


addBtn.addEventListener('click', addItem);
