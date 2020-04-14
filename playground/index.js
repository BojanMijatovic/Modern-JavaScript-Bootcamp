
const markMass = 75;
const markHeight = 1.80;

const johnMass = 80;
const johnHeight = 1.74;

let calcMark = markMass / (markHeight * markHeight);


let calcJohn = johnMass / (johnHeight * johnHeight);

// if (calcMark > calcJohn) {
//   console.log(`Mark have more MBI ${calcMark}`);
// } else if (calcJohn > calcMark) {
//   console.log(`John have more MBI with ${calcJohn}`);
// } else {
//   console.log(`They have same MBI`);
// }



const firstName = 'John';
const age = 16;

// if (age >= 18) {
//   console.log(`${firstName} can drink beer`);
// } else if (age < 18) {
//   console.log(`${firstName} is too young for beer`);
// }

age >= 18 ? console.log(`${firsName} can byu beer`) : console.log(`${firstName} is too young`);  // ternary operators

const john = 'John';
const scoreJ = 89 + 120 + 103;
const games = 3;
const scoreM = 116 + 94 + 123;
const mike = 'Mike';

const averageJ = scoreJ / games;

const averageM = scoreM / games;


// if (averageJ > averageM) {
//   console.log(`${john} have more average  with ${averageJ}`);
// } else if (averageJ < averageM) {
//   console.log(`${mike} have more average  with ${averageM}`);
// } else {
//   console.log(`The are draw`);
// }


const tipCalc = (bill) => {
  if (bill <= 50) {
    tip = bill * 0.15;
  } else if (bill > 50 && bill <= 200) {
    tip = bill * 0.20;
  } else {
    tip = bill * 0.10;
  }
  let finalPaid = bill + tip;
  return `We have ${tip} tips  and bill ${bill}  and total amount is ${finalPaid}`
}

let bill1 = tipCalc(50)
let bill2 = tipCalc(174)
let bill3 = tipCalc(374)

const tips = []

tips.push(bill1, bill2, bill3);
// console.log(tips);


const mark = {
  name: 'Mark',
  height: 1.7,
  mass: 80,
  calcBIM() {
    return this.mass / (this.height * this.height)
  }
}

console.log(mark.calcBIM());
