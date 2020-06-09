let test = 1.4;  // global contest

const addTaxFunction = (tax) => {
  const calcTax = (amount) => {  // closure
    console.log(test);
    return amount * tax + test;
  }
  return calcTax;
}

test = 4;
const valA = addTaxFunction(0.2);
const valB = addTaxFunction(0.14);
test = 40;

// console.log(valB(44));
// console.log(valA(100));


const greetUser = (name) => {
  console.log(`Hi ${name}`);
}

greetUser('Max');