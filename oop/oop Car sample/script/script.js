
// class Car {
//   constructor(type, engine, maxSpeed) {
//     this.type = type;
//     this.engine = engine;
//     this.maxSpeed = maxSpeed
//   }
// }


// const cars = {
//   models: [
//     new Car('Mazda', 'V4', 300),
//     new Car('BMW', 'V8', 320)
//   ],
//   showCar() {
//     for (let car of this.models) {                  // this point to cars obj
//       const liCar = document.createElement('li');
//       liCar.innerHTML = `
//         <p>${car.type} with ${car.engine} engine have max speed ${car.maxSpeed} km\/h</p>  `;
//       document.getElementById('app').append(liCar);
//     }
//   },

//  Remove Btn
// removeCars() {
//   const remBtn = document.createElement('button');
//   remBtn.textContent = 'remove btn';
//   remBtn.addEventListener('click', () => this.models.splice(0, 1));
//   document.getElementById('app').append(remBtn)
// }
// };

// cars.showCar();

// cars.removeCars()
// console.log(cars);

//  Example 2 :)

class Doctor {
  constructor(name, lastName, profession) {
    this.name = name;
    this.lastName = lastName;
    this.profession = profession;
  }
}

class Patient {
  constructor(name, lastName, id, cardNumber) {
    this.name = name;
    this.lastName = lastName;
    this.id = id;
    this.cardNumber = cardNumber;
  }
}

class PickDoctor {
  doctor = new Doctor('Alex', 'Jobs', 'Epidemiology');
  patient = new Patient('Rex', 'Smith', 44799, 212);

  choseDoctor() {
    return console.log(`Doctor ${this.doctor.name} pick patient ${this.patient.name}`);
  }
}

class BloodPressure {
  constructor(topLimit, bottomLimit, pulse) {
    this.topLimit = topLimit;
    this.bottomLimit = bottomLimit;
    this.pulse = pulse;
  }
}


class PickTests {
  doctor = new Doctor('Alex');
  patient = new Patient('Rex');
  test = new BloodPressure(0, 0, 180); // Extends values
  labTest() {
    return console.log(`${this.doctor.name} do on patient ${this.patient.name} test blood pressure with result ${this.test.pulse}`);
  }
}


const pickASpecialist = new PickDoctor();
pickASpecialist.choseDoctor(Doctor, Patient);

const newTest = new PickTests(Doctor, Patient, BloodPressure);
newTest.labTest();

