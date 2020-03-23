
const person = {
  name: 'John',
  age: 32,
  hobbies: ['Sports', 'Airsoft'],
  greet: function () {
    alert('Hi there');
  }
}

console.log(person);

person.age = 13;
console.log(person);

const remPerson = () => {
  delete person.age;
}

remPerson();
console.log(person);
