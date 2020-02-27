
const raceResult = [
  'first',
  'second',
  'third'
]

const [gold, silver, bronze] = raceResult;

console.log(gold);

// const nums = [100, 5, 3];

// const [x, y, z] = nums;


const nums = {
  x: 20,
  z: 3,
  y: 5
}

//  Destructing obj
const multiply = (ter) => {
  const { x, y, z } = ter;
  return z * y * x;
}

// console.log(multiply(nums));


const runner = {
  name: 'John',
  last: 'Doe',
  age: 31
}


// const fullName = (person) => {
//   const { name, last } = person;
//   console.log(`${name} and ${last}`);
// }

// fullName(runner);

const printName = ({ name, last }) => console.log(`Name is ${name} and last name is ${last}`);
// printName(runner)

//  Destructing  arr 
const response = [
  'http/ 21.444.',
  'status 200',
  'json'
]

const checkStatus = ([address, status, file]) => console.log(`on address ${address} you have status ${status} with file ${file}`);
checkStatus(response)