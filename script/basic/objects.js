
const fitBitData = {
  userName: 'Max',
  totalSteps: 34111,
  totalMiles: 441,
  avgCalorieBurn: 7744,
  workOutThisWeek: '5 to 7',
  goodSleep: true
}

let userName = fitBitData.userName;
// console.log(userName);

const users = {
  userName: null,
  star: null
}

users.userName = 'Freddy';
users.star = 5;

users.addNewUser = 'Tom';
users.addNewRatting = 3.4;

//  Update ratting 
users.addNewRatting += 2;
// console.log(users);

const student = {
  firstName: 'Ted',
  lastName: 'Morison',
  exams: {
    midTerm: 92,
    final: 84
  },
  strengths: ['Music', 'Art']
}

let finalScore = (student.exams.midTerm + student.exams.final) / 2;
// console.log(`Final score of ${student.firstName} ${student.lastName} is ${finalScore} points`);

let studentArt = student.strengths.join('/');
// console.log(`Student strengths are ${studentArt}`);

const shopCart = [
  {
    nameProduct: 'player',
    price: 300,
    quantity: 1
  },
  {
    nameProduct: 'T-Shirt',
    price: 35,
    quantity: 3
  },
  {
    nameProduct: 'shoes',
    price: 100,
    quantity: 1
  }
]

const game = {
  player1: {
    playerName: 'John',
    playerLastName: 'Doe',
    end: false,
    score: null
  },
  player2: {
    playerName: 'Rex',
    playerLastName: 'Terrie',
    end: false,
    score: null
  }
}

//  Car Obj
const car = {
  name: 'Ford',
  type: '350x',
  gearNum: 5,
  maxSpeed: 350
}

let addNumDoors = car.numDoors = 4;
//  add Max Speed
if (car.gearNum >= 5) {
  car.maxSpeed += 10;
}

//  Rename Type and Name
if (car.name.includes('F')) {
  car.name = 'New Line Ford';
  car.type = '700z'
} else {
  car.name = 'Ford';
}
console.log(car);


const products = [];
//  Add new Object to empty arr
let addProduct = products.push({
  name: 'fuel/oil',
  price: 30
})

if (products.length > 0) {
  console.log(products);
}

//  Obj Person
const person = {
  name: undefined,
  lastName: undefined,
  age: 0,
  gender: undefined,
}

person.name = 'Kyle';
person.lastName = 'Simpson';
person.age = 37;
person.gender = 'male';

if (!person.job) {
  person.job = 'JS expert';
  person.work = 'Teaching Js'
}

console.log(person);
