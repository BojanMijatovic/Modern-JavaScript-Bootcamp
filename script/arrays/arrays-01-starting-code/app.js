
const numbers = [1, 2, 3, 4];
//console.log(numbers);

const newArr = new Array(); // obj constructor
// console.log(newArr);
const li = document.querySelectorAll('li');
// console.log(li);

const test = Array.from(li)
//console.log(test);

// const personalData = [32, 'John', { freelance: 'backend' }];

const hobbies = ['Js', 'React'];
hobbies.push('Node.js'); // add on end array
hobbies.unshift('Html , Css'); // add on begin array
// console.log(hobbies);

const removeLast = hobbies.pop();
// console.log(`Last removed is ${removeLast} in arr ${hobbies}`);

hobbies.splice(hobbies.length, 0, 'Ex Airsoft', 'Node.js');
// console.log(hobbies);

const removeAll = () => {
  hobbies.splice(0, hobbies.length) // remove all from array
}
// removeAll();
// console.log(hobbies);

const testResults = [1, 2, 3.4, -1, 10];
const storedResult = testResults.slice(0, 1);
// console.log(storedResult);

const resultIndex = testResults.indexOf(10);
// console.log(resultIndex);


const person = [{ name: 'John', age: 21 }, { jobs: 'freelance', type: 'backend' }];


const findJobs = person.find((p, id, persons) => { // return match obj
  return p.name === 'John';
});
// console.log(findJobs);


const findIndexJob = person.findIndex((person, id) => { // return index off
  return person.name === 'John';
})
// console.log(findIndexJob);


const prices = [2, 44, 5.2, 1.3, 1.5, 3, 4];
const taxes = 0.2;
const newPrice = []; // ----  empty arr to add new Prices 
// const addTax = prices.map((price) => {  // map function  
//   return price * taxes;
// });
// console.log(`This is price with tax ${addTax}`);

const addTax = prices.forEach((price) => {
  return newPrice.push(price + (price * taxes)); // For each function
})
// console.log(prices);
// console.log(newPrice);

const shopPrice = prices.map((price, id) => {
  const item = { index: id + 1, amount: price }; // example for shop and prices
  return item;
});

// console.log(shopPrice);


const sortedPrices = prices.sort((a, b) => { // sorted function
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});

// console.log(sortedPrices);

sortedPrices.reverse(); // Reverse arr
// console.log(sortedPrices);

const filteredPrice = prices.filter(price => price > 5); // return new arr 
// console.log(filteredPrice);

const reducePrice = prices.reduce((prevV, currentV) => currentV + prevV);
console.log(reducePrice);
