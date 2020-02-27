
const raceResult = [
  'first',
  'second',
  'third'
]

const [gold, silver, bronze] = raceResult;

console.log(gold);

// const nums = [100, 5, 3];

// const [x, y, z] = nums;


const nums = {
  x: 20,
  z: 3,
  y: 5
}

const multiply = (ter) => {
  const { x, y, z } = ter;
  return z * y * x;
}

console.log(multiply(nums));

