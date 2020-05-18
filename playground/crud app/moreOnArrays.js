const nums = [1, 3, 4, 5, 65, 7, 76, 321, 21];
const newList = [...nums];  // spread operators
nums[0] = 100;
nums.push(42);

// console.log(nums);
// console.log(newList);

const p = [{ name: 'a' }, { name: 'b' }];
const newPe = [...p];        // spread operators on obj
p.push({ name: 'c' })
p[0].name = 'test';

// console.log(p);
// console.log(newPe);

const personalData = ['Rex', 33, { hobby: 'Learn js' }];  // Array Destructuring
const [name, ...nextItemFromArray] = personalData;

console.log(name, nextItemFromArray);

const addNewPersons = (obj, value) => {
  obj.push({ name: value })
}

const showAllPersons = () => {
  const showP = [...p];                // implement spread operator
  return console.log(showP);
}


addNewPersons(p, 'New name');
addNewPersons(p, 'New Last name');
showAllPersons()


const [firstP, secondP, ...lastP] = p;
console.log(firstP, secondP);

const editFirstPerson = () => {
  p[0].name = 'Tomas';
  const [fP] = p;
  return console.log(fP);
}

editFirstPerson();

const products = [];

const tax = 0.20;

const addProducts = (product, amount, value) => {
  products.push({ product: product, amount: amount, value: value });
}

addProducts('beer', 4, 0.36);
addProducts('apple', 2, 0.15);
addProducts('bike', 1, 0.2);

console.log(products);

const addTax = products.forEach((product, id) => {
  return console.log(`${id + 1} ${product.product} have tax ${(product.value * tax) * product.amount} `)
});



