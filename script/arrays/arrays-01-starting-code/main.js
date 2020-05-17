// const nums = [[1, 2, 3], [-3, 4.5, 22]];

// from multidimensional array
// for (const num of nums) {
//   for (const n of num) {
//     console.log(`Num is ${n}`); 
//   }
// }


const hobbies = [];
const addArr = hobbies.push('coding', 'js');  // const addArr => returns arr length
hobbies.splice(addArr, 0, 'react', 'redux'); // add with slice method
hobbies.splice(hobbies.length, 0, 'scss', 'r-native'); // add with slice method
// console.log(hobbies);

// const sliceNums = nums.slice(2, 5);
// console.log(sliceNums);
// const spliceNums = nums.splice(2, 3);
// console.log(spliceNums);

const nums = [2, 3, 44, 4, 5, 66.7, -1];
const index = nums.indexOf(4); // return index off searched item
// console.log(index);



const removeSingle = nums.splice(index, 1);  // pick that item 
// console.log(removeSingle);

const persons = [{ name: 'a', age: 20 }, { name: 'b', age: 30 }, { name: 'Alex', age: 44 }]

const removePerson = (persons, id) => { // remove person from array persons
  const indexP = persons.findIndex(person => person.age === 30);
  persons.splice(indexP, 1);
}

const changeName = (persons, name) => {
  const newName = persons.findIndex(person => person.name === 'a')
  persons[newName].name = name;
}

changeName(persons, 'Smith');

removePerson(persons);

persons.push({ name: 'Max', age: 35 })

console.log(persons);



