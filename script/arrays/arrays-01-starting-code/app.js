
const numbers = [1, 2, 3, 4];
//console.log(numbers);

const newArr = new Array(); // obj constructor
console.log(newArr);
const li = document.querySelectorAll('li');
// console.log(li);

const test = Array.from(li)
//console.log(test);

// const personalData = [32, 'John', { freelance: 'backend' }];

const hobbies = ['Js', 'React'];
hobbies.push('Node.js'); // add on end array
hobbies.unshift('Html , Css'); // add on begin array
console.log(hobbies);

const removeLast = hobbies.pop();
console.log(`Last removed is ${removeLast} in arr ${hobbies}`);
