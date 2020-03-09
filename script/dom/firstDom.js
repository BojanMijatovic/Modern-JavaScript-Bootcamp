
const btnId = document.getElementById('btnSubmit');

//console.log(btnId);

const lists = document.getElementsByTagName('p');
// console.log(lists);

for (let list of lists) {
  //console.log(list);
}
// console.log(ul.getElementsByClassName('list'));


const title = document.querySelector('h1');
// console.log(title);
console.log(title.innerText);

title.innerText = 'Test Js and Dom';


// const paragraph = document.querySelectorAll('p');
// console.log(paragraph);

let li = document.querySelectorAll('.list-items');
for (let item of li) {
  console.log(item);
  item.style.color = 'red';
  item.innerHTML = 'Test'.toUpperCase();
}