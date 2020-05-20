const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const userName = document.querySelector('#user-name');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const addBtn = document.querySelector('button');

const persons = [];


const addNewPerson = () => {
  const newPerson = {
    name: name.value,
    lastName: lastName.value,
    userName: userName.value,
    password: password.value,
    email: email.value,
    phone: phone.value
  }
  validateInputs(newPerson)
  console.log(persons);
}

const clearInputs = () => {
  name.value = '';
  lastName.value = '';
  userName.value = '';
  password.value = '';
  email.value = '';
  phone.value = '';
}

const validateInputs = (person) => {
  if (person.name.trim() === '' || person.lastName.trim() === '') {
    alert('Please insert real values');
    clearInputs();
  } else {
    showPerson(person)
    persons.push(person)
  }
}


const showPerson = (person) => {
  const showList = document.querySelector('.show');
  const list = document.createElement('div');
  list.innerHTML = `
  <p>${person.name}</p>
  <p>${person.lastName}</p>
  <p>${person.password}</p>
  <p>${person.email}</p>
  <p>${person.phone}</p>
  `;
  showList.append(list);
}


const addItemsHandler = () => {
  addNewPerson();
  clearInputs();
}

addItemsHandler()

addBtn.addEventListener('click', addItemsHandler);