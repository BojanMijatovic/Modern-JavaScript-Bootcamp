
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

// function greet(name) {
//   console.log(`Hello ${name}`);
// }
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


function findAvg(arr) {
  let num = 0;
  for (let n of arr) {
    num += n;
  }
  let c = num / arr.length;
  return console.log(c);
}

// findAvg([2, 4, 6, 33]);

// findAvg([0, 50]);

let greet = function () {
  console.log('Hello');
};

// greet();

let square = function (num) {
  let res = num * num;
  return res;
}

let total = square(4);
// console.log(total);


let convertTemp = function (far) {
  let celsius = (far - 32) / 1.8;
  return celsius;
}

let con = convertTemp(68);
// console.log(con);


//  Search name 
let searchName = function (name) {
  if (name.toLowerCase().indexOf('j') > -1) {
    return console.log(name);
  } return console.log('Please insert name');
}

// searchName('doe');
// searchName('Joe');
// searchName('john');

//  Default arguments

let getScore = function (name = 'Anonymous', score = 0) {
  return `${name} have ${score} points`;
}

let player1 = getScore();
// console.log(player1);


let getTip = function (total, tip = total * 0.2) {
  return `Your total is ${total}  and tip is ${tip} all together is ${total + tip}$`
};

let fullSum = getTip(100);
let fullSum1 = getTip(263);
// console.log(fullSum);
// console.log(fullSum1);
