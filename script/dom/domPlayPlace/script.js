
const title = document.getElementById('main-title');
const changeTitle = document.getElementById('change-title');
const addName = document.getElementById('add-name');
const nameValue = document.getElementById('input-name');
const changeColor = document.querySelector('.changeColor');
const list = document.querySelector('.first-list');
names = [];



//  Toggle background color 
const changeBackground = () => {
  const body = document.querySelector('body');
  body.classList.toggle('main-color');
}

//  Clear input 
const clearInput = () => {
  nameValue.value = '';
}


// Add names 
const addNameHandler = () => {

  const newName = document.createElement('li');
  if (nameValue.value === '') {
    alert(`Please insert your name in input place`)
  }
  newName.innerText = nameValue.value;
  newName.classList = 'listStyle';
  names.push(newName);
  list.append(newName);
  clearInput();
}


//  Change Title Value
const changeTitleValue = () => {
  title.innerText = 'This is good beginning';
  title.classList = 'main-title';
}


changeTitle.addEventListener('click', changeTitleValue)
addName.addEventListener('click', addNameHandler)
changeColor.addEventListener('click', changeBackground);