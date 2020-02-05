
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

let test = freeSpace.trim().toLowerCase();

// console.log(freeSpace.trim().toUpperCase().length);
// console.log(test);

if (test.indexOf('Colors')) {
  let newWord = freeSpace.replace('Colors', 'Blue');
  console.log(newWord);
} else {
  console.log('That is not that word');
}




// let sport = 'BasketBall';

// let findSport = sport.toLowerCase().indexOf('bfall');

// if (findSport >= 0) {
//   let test = sport.slice(findSport);
//   console.log(test);

// } else {
//   let newSport = sport.replace('BasketBall', 'football');
//   console.log('New sport is ' + newSport);
// }


