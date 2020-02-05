
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
