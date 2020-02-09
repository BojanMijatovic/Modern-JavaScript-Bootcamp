
let list = ['Ice', 'Cheese', 'Bread'];

let lottoNums = [4, 21, 1, 11, 32, 9, 8];

let books = [];

// books === books.length == 0 ? console.log('You don t have book') : console.log(`You have some books ${books}`);

const colors = ['blue', 'green', 'yellow', 'red', 'pink', 'white', 'black', 'orange'];

// console.log(colors.length - 1); // size off array 

colors[0] = 'violent';

//  Rename items on colors
// console.log(colors);

const cars = ['bmw', 'audi'];

cars.push('volvo');
cars.push('ferrari');

// cars.pop(); // remove last item  from  array

const removeLastCar = cars.pop();
// console.log(cars);

//  Add item to start off array
let addCarToStart = cars.unshift('Fiat');
cars.unshift('Golf');

// console.log(cars);

// cars.shift(); // removes first element on array
// console.log(cars);

// Concat arrays
const nums1 = [1, 2, 3, 4, 5];

const nums2 = [4, 5, 6, 7, 7, 8];
// const nums = nums1.concat(nums2);
// console.log(nums);

const notes = ['buy food', 'clean room', 'go to gym'];
// console.log(nums1.push(nums2));
// console.log(nums1);


// console.log(cars);

let a = cars.includes('volvo');
// console.log(a);


// includes
const beasts = ['butterfly', 'ant', 'bison', 'camel', 'duck', 'bison'];

if (beasts.includes('ant')) {
  console.log(`You have a ant`);
}

//  index Off

if (beasts.length >= 4) {
  let test = beasts.indexOf('ant');
  console.log(test);
}