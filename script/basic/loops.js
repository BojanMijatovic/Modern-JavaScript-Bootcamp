
//  Standard For loop
// for (let i = 1; i <= 10; i++) {
//   console.log('Hello ' + [i]);
// }

// Multiply
// for (let i = 1; i < 10; i++) {
//   console.log(`${i * i}`);
// }


// Back
for (let i = 50; 0 <= i; i -= 10) {
  // console.log(i);
}

//  More back loop  :)
for (let i = 200; i >= 0; i -= 20) {
  // console.log(i);
}

// Task num 3
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}
// Task num 4
for (let i = 0; i <= 20; i++) {
  if (i % 3 === 0) {
    // console.log(i);
  }
}


//  For loops with arrays
const animals = ['lions', 'bugs', 'cats', 'panther'];

//  Task num 5
for (let i = 0; i < animals.length; i++) {
  // console.log(animals[i]);
}

//  Loop with arrays and obj
const shopCart = [
  {
    nameProduct: 'player',
    price: 300,
    quantity: 1
  },
  {
    nameProduct: 'T-Shirt',
    price: 35,
    quantity: 3
  },
  {
    nameProduct: 'shoes',
    price: 100,
    quantity: 1
  }
]


//  Sum all products 
let sum = 0;
for (let i = 0; i < shopCart.length; i++) {
  sum += shopCart[i].price;
}
// console.log(sum / shopCart.length);

//  Reverse array
const word = '123456789';

for (let i = word.length - 1; i >= 0; i--) {
  let reverse = word[i];
  // console.log(reverse);
}

//  inner and outer loop
for (let i = 1; i <= 10; i++) {
  // console.log('Loop ' + i);
  for (let j = 10; j > 0; j--) {
    // console.log('Inner loop ' + j);
  }
}


// const gameBoard = [
//   [4, 8, 32, 2],
//   [6, 14, 10, 22],
//   [24, 12, 4, 14],
//   [6, 26, 18, 2]
// ]

// for (let i = 0; i < gameBoard.length; i++) {
//   let gameRow = gameBoard[i];
//   for (let j = 0; j < gameRow.length; j++) {
//     console.log(`J is ${gameRow[j]}`);
//   }
// }


// const nums = [1, 3, 4, 5, 6, 7, 8, 9];

// for (let num of nums) {
//   console.log(num);
// }


//  For off loop
// const person = {
//   name: 'Jon',
//   lastName: 'Doe',
//   age: 32,
//   city: 'Ns'
// }

// for (const info of Object.keys(person)) {
//   console.log(info);
// }

// const nums = [1, 2, 3, 4, 5, 6, 666, 7, 8, 9];
// const test = [2, 7, 9, 9, 7, 2, 21];

// if (nums.length > test.length) {
//   console.log(`Nums are bigger arr with ${nums.length} and difference is ${nums.length - test.length} points`);
// } else if (test.length > nums.length) {
//   console.log(`test are bigger arr with ${test.length}  and difference is ${nums.length - test.length} points`);
// } else {
//   console.log(`They are equals`);
// }

// for (let num of nums) {
//   if (num === 6) {
//     console.log(`Your num is ${num}`);
//     break;
//   }
//   console.log(num);
// }


//  Task 09
// for (const num of nums) {
//   if (num === 5) {
//     console.log(`Num is ${num}`);
//     break;
//   }
// }

let te = 4;