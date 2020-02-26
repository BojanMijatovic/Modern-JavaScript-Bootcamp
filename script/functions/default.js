
//  Default arg
//const addNum = (a = 4, b = 1) => a + b;
// console.log(addNum());

//const greet = (name = 'user') => `Welcome ${name}`;
// console.log(greet('John'));

//  Spread Nums 
//const nums = [1, 23, 4, 5, 566, 6, 7, 8, 9, 11, 321, 32, 45,];
// console.log(Math.max(...nums));
// console.log(Math.min(...nums));

// const a = [1, 2, 3, 4, 5];
// const b = [6, 7, 8];
// const c = [...a, ...b];
// console.log(c);

const text = 'afascas';
const d = [...text];
//console.log(d);
// d.forEach((l, i) => console.log(`${l} is on ${i + 1} place`));

const b1 = [2, 4, 3]
const b = [...b1, 1, 5, 6, 7]

const a = (...c) => {
  return c;
}

// console.log(a(...b));


// Object Literals

const person = {
  name: 'user',
  age: null
}

const me = {
  ...person,  // literal obj
  job: true,
  skills: []
}

console.log(me);
