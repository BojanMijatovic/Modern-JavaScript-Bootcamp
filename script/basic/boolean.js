
let isFreezing = false;

//  Challenge Area

let age = 33;
let isChild = age <= 7;
// console.log(isChild);

let isSenior = age >= 65;
// console.log(isSenior);


if (isFreezing) {
  console.log('Out is cold');
}

if (age <= 7) {
  console.log('You have discount for kids');
}
if (age >= 65) {
  console.log('You have discount for older people');
}