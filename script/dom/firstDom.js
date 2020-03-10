
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

const ul = document.querySelector('.testing');
// ul.innerText = 'New Dom';

// const form = document.querySelector('form');
// form.innerHTML = '<p> New form</p>';
// console.log(form);

const inputs = document.querySelector('form');
console.log(inputs[0].value);
