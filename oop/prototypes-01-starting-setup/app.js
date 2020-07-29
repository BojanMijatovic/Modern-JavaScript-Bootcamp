
const person = {
  name: 'Alex',
  lastName: 'Anderson',
  married: true,
  children: ['Ted', 'John'],
  greet() {
    console.log(`Hello my name is ${person.name}`);
  },
  job: {
    title: 'developer',
    company: false,
    freelance: 'ast omega 021',
    skills: {
      frontEndDevelopment: ['html', 'css', 'js']
    }
  },
  fullName() {
    console.log(`My name is ${this.name}`);
  }
}

person.town = 'Valencia';


person.fullName();
console.log(person);
console.log(person.job);