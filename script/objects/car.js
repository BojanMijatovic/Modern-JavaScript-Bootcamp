
const myCar = {
  name: 'ford',
  speed: 0,
  gear: 0,
  break: true
}

//  Start Car
let startCar = function (car, sp, gear) {
  let startG = car.gear += gear;
  let startingCar = car.speed += sp;
  if (startG > 0 && startingCar <= 15) {
    console.log(`You start ${car.name} with speed ${startingCar} in ${startG} gear`);
  }
  car.break = false;
}

let a = startCar(myCar, 10, 1);
console.log(myCar);

//  Stop car 
let stopCar = function (car) {
  car.speed = 0;
  car.gear = 0;
  car.break = true;
  return `You are now stop ${car.name} speed is  ${car.speed} and gear are ${car.gear}`
}

let b = stopCar(myCar)
console.log(b);