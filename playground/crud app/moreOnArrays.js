const nums = [1, 3, 4, 5, 65, 7, 76, 321, 21];

const newList = [...nums];  // spread operators
nums[0] = 100;
nums.push(42);

// console.log(nums);
// console.log(newList);

const p = [{ name: 'a' }, { name: 'b' }];
const newPe = [...p]; // spread operators on obj
p.push({ name: 'c' })

p[0].name = 'test';

// console.log(p);
// console.log(newPe);

const personalData = ['Rex', 33, { hobby: 'Learn js' }];  // Array Destructuring

const [name, age, learn] = personalData;

console.log(name, learn);
