
//  Random nums 

// let randomNum = Math.floor(Math.random() * 6) + 1;
// let makeGes = 4;

// let random = function (gesNum, ranNum) {
//   if (gesNum === ranNum) {
//     return true
//   } else {
//     return false;
//   }
// }

// let a = random(makeGes, randomNum);
// console.log(a);
// console.log(randomNum);

//  Todo array

// const todoArr = ['js', 'node', 'react', 'redux', 'robotic'];
// console.log(`Todo to ${todoArr[0]} and ${todoArr[todoArr.length - 2]}`);


const myCar = {
  name: 'ford',
  speed: 0,
  gear: 0,
  break: true
}

//  Start Car
let startCar = function (car, sp, gear) {
  car.gear = car.gear += gear;
  let startingCar = car.speed += sp;
  if (gear > 0 && startingCar <= 15) {
    console.log(`You start ${car.name} with speed ${startingCar} in ${gear} gear`);
  }
  car.break = false;
}

// let a = startCar(myCar, 10, 1);


//  Stop car 
let stopCar = function (car) {
  car.speed = 0;
  car.gear = 0;
  car.break = true;
  return `You are now stop ${car.name} speed is  ${car.speed} and gear are ${car.gear}`
}

// let b = stopCar(myCar)
// console.log(b);

// console.log(myCar);


const wheelProps = {
  num: 4,
  height: 103,
  width: 205,
  revsPerMile: 874,
  carSpeed: 0
}


let speedWheel = function (wheel, speed) {
  wheel.carSpeed = wheel.carSpeed += speed;
  if (wheel.carSpeed >= 10) {
    wheel.revsPerMile += speed;
    wheel.width = wheel.width += (speed / 2);
    wheel.height = wheel.height -= (speed / 2);
  }
}
// let a = speedWheel(wheelProps, 12);

// console.log(wheelProps);
