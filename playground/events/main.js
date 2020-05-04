const title = document.querySelector('h1');
title.textContent = 'This is new Title from js';


const subTitle = document.createElement('h2');
subTitle.textContent = 'This is subtitle';
document.body.append(subTitle);

const colorBtn = document.querySelector('#change-color');

colorBtn.addEventListener('click', (e) => {
  title.classList.toggle('test');
  title.textContent = 'New text';
})

const li = document.querySelectorAll('li');

li.forEach(list => list.textContent = 'New title')


const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  const newC = document.createElement('p');
  newC.textContent = 'test  new color'
  newC.style.color = color;
  document.body.append(newC)
}

