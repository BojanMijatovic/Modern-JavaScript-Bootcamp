
function test() {
  let i = 4;
  console.log(i * 3);
};

// test();

function rollDie() {
  let num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
}

function throwDice(numRoll) {
  for (let i = 0; i < numRoll; i++) {
    rollDie();
  }
}
// throwDice(4);

function greet(name) {
  console.log(`Hello ${name}`);
}
// greet('Jon');


function sum(a, b) {
  console.log(`Result is ${a + b}`);
}
// sum(4, 2);

function addName(name, lastName) {
  let i = name.toUpperCase();
  let last = lastName.toLowerCase();
  console.log(`Hello ${i} ${last}`);
}

addName('John', 'DOe');