// const nums = [[1, 2, 3], [-3, 4.5, 22]];

// from multidimensional array
// for (const num of nums) {
//   for (const n of num) {
//     console.log(`Num is ${n}`); 
//   }
// }


const hobbies = [];
const addArr = hobbies.push('coding', 'js');  // const addArr => returns arr length
console.log(hobbies);

hobbies.splice(addArr, 0, 'react', 'redux'); // add with slice method

hobbies.splice(hobbies.length, 0, 'scss', 'r-native'); // add with slice method

const nums = [2, 3, 44, 4, 5, 66.7, -1];

const sliceNums = nums.slice(2, 5);
console.log(sliceNums);
const spliceNums = nums.splice(2, 3);
console.log(spliceNums);
