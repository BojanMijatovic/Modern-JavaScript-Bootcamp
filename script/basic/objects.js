
const fitBitData = {
  userName: 'Max',
  totalSteps: 34111,
  totalMiles: 441,
  avgCalorieBurn: 7744,
  workOutThisWeek: '5 to 7',
  goodSleep: true
}

let userName = fitBitData.userName;
console.log(userName);

const users = {
  userName: null,
  star: null
}

users.userName = 'Freddy';
users.star = 5;

console.log(users);

users.addNewUser = 'Tom';
users.addNewRatting = 3.4;

//  Update ratting 
users.addNewRatting += 2;
console.log(users);
