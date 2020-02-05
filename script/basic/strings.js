
//  First String and beginning

let name = 'Bojan';

// let lastName = 'Mijatovic';

// let fullName = name + ' ' + lastName;

let city = 'Novi Sad';
let country = 'Serbia';
let location = ' i come form ' + city + ' in ' + country;

// console.log(fullName);

// console.log('Hello my name is ' + fullName + location);

//  New Lines off text
let newLineText = 'We have first line text \n and Second line here';

// console.log(newLineText);

let firstName = 'Ziggy';
let lastName = 'Canary';

let fullName = 'You are ' + firstName + ' ' + lastName;
// console.log(fullName);

let num = fullName.length;
// console.log(num); length off full name with spaces

let firstChar = firstName[0];

// console.log(firstChar);  'Z'

let msg = 'Here is first chat';

// console.log(msg.toUpperCase()); HERE IS FIRST CHAT

let freeSpace = 'Colors         ';
console.log(freeSpace.length);

let test = freeSpace.trim();

console.log(freeSpace.trim().toUpperCase().length);
// console.log(test.length);

let sport = 'BasketBall';

let findSport = sport.toLowerCase().indexOf('bfall');

if (findSport >= 0) {
  let test = sport.slice(findSport);
  console.log(test);

} else {
  console.log('Not that word');
}
