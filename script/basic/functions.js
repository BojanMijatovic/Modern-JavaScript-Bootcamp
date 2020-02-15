
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

// addName('John', 'DOe');


function checkUserName(name, lastName) {
  if (!name) {
    console.log('Please insert name ');
  } else if (!lastName) {
    console.log(`Please insert last Name`);
  }
}

// checkUserName(null, 'T')

function password(userPassword, name) {
  if (userPassword.length <= 6) {
    console.log(`Please ${name} insert more characters in your password`);
  } else {
    console.log(`Welcome ${name}`);
  }
}

// password('test21321', 'Alex');

function isBlue(color) {
  if (color.toLowerCase() !== 'blue') {
    console.log(`Please insert blue color`);
    return false;
  }
}
// isBlue('BLue');


function isValidPassword(password, userName) {
  if (password.length < 8 || password.includes(userName.toLowerCase()) || password.includes(' ')) {
    return console.log('Invalid password');
  } console.log(`Welcome ${userName}`);
}

// isValidPassword('testj2s', 'Jane');