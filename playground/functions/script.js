

const addTaxFunction = (tax) => {
  const calcTax = (amount) => {
    return amount * tax
  }
  return calcTax;
}

const valA = addTaxFunction(0.2);
const valB = addTaxFunction(0.14);

console.log(valB(44));
console.log(valA(100));

