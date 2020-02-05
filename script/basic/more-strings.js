
// let word = '         JavaScript';

// let mission = word.length;

// let test = word.trim().toLowerCase();

// console.log(test);

// console.log(test.length);

// console.log(mission);


let name = 'Bojan';

let lastName = 'Mijatovic React';

let searchName = name.toLowerCase().indexOf('b');

if (searchName >= 0) {
  let newName = name.replace('Bojan', 'Js');
  let newLast = lastName.slice(9);
  console.log('New name is ' + newName + ' and last name is ' + newLast);
}
let points = 0;

let a = 'Soccer is best sport';

let b = 'Basket is best sport';

let test = a.trim().toLowerCase().indexOf('1s');

if (test >= 0) {
  let c = b.replace('Basket', 'Airsoft').toUpperCase();
  console.log(c);
  let newScore = points += 10;
  console.log('Your score is now ' + newScore);
} else {
  console.log(a.toUpperCase());
  let newScore = points -= 10;
  console.log('Your score is now  \n ' + newScore + ' points');
}

