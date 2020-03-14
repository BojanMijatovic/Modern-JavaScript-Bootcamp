const start = document.querySelector('#start-game-btn');

const serbia = 'serbia';
const china = 'china';
const italy = 'italy';
const slovenia = 'slovenia';

const serbiaStats = 41;
const chinaStats = 88000;
const italyStats = 12000;
const sloveniaStats = 144;

const countryName = () => {
  const chooseCountry = prompt('Please pick country', '').toUpperCase();
  if (chooseCountry !== serbia && chooseCountry !== china && chooseCountry !== italy && chooseCountry !== slovenia) {
    alert(`Please pick one country ${serbia} ${china} ${italy} ${slovenia} `)
    return `Please insert name off country`;
  }
  return chooseCountry;
}

const countryStats = (country) => {
  if (country === 'SERBIA') {
    return `You choose ${country} and stats infected are ${serbiaStats}`
  } else if (country === 'CHINA') {
    return `You choose ${country} and stats infected are ${chinaStats}`
  }
  else if (country === 'ITALY') {
    return `You choose ${country} and stats infected are ${italyStats}`
  }
  else if (country === 'SLOVENIA') {
    return `You choose ${country} and stats infected are ${sloveniaStats}`
  }
}

start.addEventListener('click', () => {

  const pickCountry = countryName();
  const showStats = countryStats(pickCountry);
  console.log(pickCountry);

  console.log(showStats);
})







//   reminder off Rest operators
const addNum = (...nums) => {
  let numAr = 0;
  for (let num of nums) {
    numAr += num;
  }
  return numAr;
}

// console.log(addNum(1, 2));

// const test = (a, b) => a + b;

// console.log(test(2, 3));

//  reminder off callback functions
const sumNum = () => {
  const test = (a, b) => a + b;

  let one = test(2, 2);

  const add = (x, y) => x + y;

  return add(one, 10)
}

console.log(sumNum());

