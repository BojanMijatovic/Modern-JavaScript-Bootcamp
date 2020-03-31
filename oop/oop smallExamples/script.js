
// class Person {
//   constructor(name, lastName, age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }



// class Student extends Person {            //  Work with Extends Class
//   student = new Person('Smith', 'Ford', 33)

//   readBook() {
//     return `${this.student.name} ${this.student.lastName} read book`;
//   }
// }


// class bestBook extends Student {
//   book = 'Templars';
//   name = 'John';
//   readBook() {
//     return `${this.name} read ${this.book}`
//   }
// }

// const smith = new Student();
// console.log(smith.student);
// console.log(smith.readBook());


// john = new bestBook();
// console.log(john.readBook());


// class Drone {
//   constructor(id) {
//     this.id = id
//   }
// }

// class Motor extends Drone {
//   repair = false;
//   start = false;
//   speed = 0;
//   id = 'V001';

//   startMotor() {
//     this.start = true;
//     this.motor = 'on';
//     if (this.start && this.speed > 1) {
//       this.motor;
//     } else {
//       this.motor = false;
//     }
//     return `Drone ${this.id}  is start with speed ${this.speed}km\/h`;
//   }

//   turnOffMotor() {
//     this.speed = 0;
//     this.motor = 'off';
//   }

//   startB() {
//     const b = new Battery();
//     b.startBattery();
//     return b.capacity;
//   }

//   startControls() {
//     const batStatus = this.startB();
//     if (batStatus < 25) {
//       console.log(`No recommendation  to fly battery status is ${batStatus}`);
//     } else {
//       const controls = new ElectronicSpeedControls();
//       return console.log(`Control motors is on ${controls.startElectronicControls()}km\/h battery status is ${batStatus}%`);
//     }
//   }
// }

// class Battery {
//   capacity = 100;
//   start = false;

//   startBattery() {
//     this.start = true;
//     this.capacity = this.capacity - 0.1;
//   }
// }

// /*
// ESC
// or Electronic Speed Controls is a component that works set on each motor rotation speed . You need four pieces of ESC are connected to each of the four motors earlier.
// Later, the ESC is connected to the battery as a power source via a socket or via power distribution board first. The level of accuracy of motor rotation is very important to maintain the stability quadcopter , so use the appropriate and qualified ESC .
// As a recommendation , use ESC contained therein Simonk Firmware , firmware is able to change the refresh rate of the ESC so as to provide instructions per second more than the ESC to the motor
// */
// class ElectronicSpeedControls {
//   motorSpeed = 0;
//   startElectronicControls() {
//     return this.motorSpeed = this.motorSpeed += 2;
//   }
// }
// class FlightController {
//   connection = false;
//   deviceSignal = 'strong';
//   deviceControl = 'bluetooth';

//   startControl() {
//     return this.connection = 'true';
//   }

//   checkMotorStatus() {
//     const motorStatus = new Motor();
//     motorStatus.startMotor();
//     const start = this.startControl();
//     if (this.deviceSignal === 'strong' && start) {
//       return console.log(`We are good to fly`);
//     } else {
//       return console.log(`Please check some parameters`);
//     }
//   }
// }

// class Charger {
//   turnOff = true;
// }

// // class Propeller { }

// const startModel = new Motor();
// const batteryStatus = startModel.startB();

// startModel.startControls();

// console.log(startModel.startMotor());

// const checkBeforeFly = new FlightController();
// checkBeforeFly.checkMotorStatus();


// class Trout extends Fish {
//   constructor(habitat, length, variety) {
//     super(habitat, length)
//     this.variety = variety
//   }



//  -------- Course Example


// class Course {
//   constructor(title, length, price) {
//     this.title = title;
//     this.length = length;
//     this.price = price;
//   }

//   calcLengthPrice() {
//     return `${this.length / this.price} is value off ${this.title} course`;
//   }

//   summaryCourse() {
//     return `You have ${this.title} course with ${this.length}h for price off ${this.price}$`;
//   }
// }


// class PracticalCourse extends Course {

//   constructor(title, numOffExercises) {
//     super(title);
//     this.numOffExercises = numOffExercises;
//   }

//   publish() {
//     return `Course ${this.title} have ${this.numOffExercises} exercises`
//   }
// }




// const react = new Course('React', 50, 20);
// const node = new Course('Node', 33, 11);
// const practicalC = new PracticalCourse('Node', 10);

// console.log(practicalC.publish());

// console.log(react);

// console.log(react.summaryCourse());
// console.log(node.calcLengthPrice());



//   --------- Car Register sample OOP

// class Car {

//   constructor(id, type, test, owner) {
//     this.id = id;
//     this.type = type;
//     this.test = test;
//     this.owner = owner;
//   }


//   addCar() {
//     const cars = [];
//     const car1 = new Car(784, 'Mazda', 'passed', 'Max');
//     const car2 = new Car(4322, 'BMW', 'passed', 'Rex');
//     cars.push(car1, car2);
//     return cars;
//   }

//   registeredCars() {
//     const cars = this.addCar();
//     cars.forEach((car) => console.log(`${car.type} with id ${car.id} is ${car.test} registration`))
//   }
// }


// class Fiat extends Car {

//   constructor(id, test, engine, numOffWheels) {
//     super(id);
//     this.test = test;
//     this.engine = engine;
//     this.numOffWheels = numOffWheels;
//   }

//   showFiat() {
//     return `${this.id} is ${this.test} with ${this.engine} power, model have ${this.numOffWheels} wheels`
//   }
// }


// const ford = new Car('4223', 'Ford', 'not passed', 'John');
// console.log(ford);

// const cars = new Car();
// cars.registeredCars();

// const fiat = new Fiat(32123, 'passed', '150w', 4);
// console.log(fiat.showFiat());


// class Person {

//   constructor(name, lastName, age, id) {
//     this.name = name;
//     this.lastName = lastName;
//     this.id = id;
//     this.age = age;
//   }

//   showPerson() {
//     return `${this.name} ${this.lastName} have ${this.age} years and his id is ${this.id}`;
//   }
// }


// class Man extends Person {

//   constructor(name, lastName, age, job, id) {
//     super(name, lastName, age, id)
//     this.job = job;
//   }

//   addJob() {
//     const sP = this.showPerson();
//     const gen = `and his job is ${this.job}`;
//     return `${sP} ${gen}`;
//   }
// }


// const men1 = new Person('Alex', 'Smith', 25, 4131);
// console.log(men1.showPerson());

// const bob = new Man('Bob', 'Steve', 34, 'driver', 31511);

// console.log(bob.addJob());




// -------- Time Out 

// const showThis = () => {
//   console.log("hello form here ");
// }


// setTimeout(showThis, 2000);

// -----------Interval

// setInterval(() => {
//   let one = 1;
//   console.log(`This is one ${one++}`);
// }, 2000);


//  ----- Get Date

// const day = new Date();
// console.log(`${day.getDate()} ${day.getMonth()}  ${day.getFullYear()}`);
