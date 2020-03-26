
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


class Drone {
  constructor(id) {
    this.id = id
  }
}

class Motor extends Drone {
  repair = false;
  start = false;
  speed = 0;
  id = 'V001';

  startMotor() {
    this.start = true;
    this.motor = 'on';

    if (this.start && this.speed > 1) {
      this.motor;
    } else {
      this.motor = false;
    }
    return `Drone ${this.id}  is start with speed ${this.speed}km\/h`;
  }

  turnOffMotor() {
    this.speed = 0;
    this.motor = 'off';
  }

  startB() {
    const b = new Battery();
    b.startBattery();
    return `${b.capacity}`;
  }

  startControls() {
    const batStatus = this.startB();
    if (batStatus < 25) {
      console.log(`No recommendation  to fly battery status is ${batStatus}`);
    } else {
      const controls = new ElectronicSpeedControls();
      return console.log(`Control motors is on ${controls.startElectronicControls()}km\/h battery status is ${batStatus}`);
    }
  }
}

class Battery {
  capacity = 100;
  start = false;

  startBattery() {
    this.start = true;
    this.capacity = this.capacity - 0.1;
  }


}



/*
ESC
or Electronic Speed Controls is a component that works set on each motor rotation speed . You need four pieces of ESC are connected to each of the four motors earlier.
Later, the ESC is connected to the battery as a power source via a socket or via power distribution board first. The level of accuracy of motor rotation is very important to maintain the stability quadcopter , so use the appropriate and qualified ESC .
As a recommendation , use ESC contained therein Simonk Firmware , firmware is able to change the refresh rate of the ESC so as to provide instructions per second more than the ESC to the motor
*/

class ElectronicSpeedControls {
  motorSpeed = 0;

  startElectronicControls() {
    return this.motorSpeed = 2;
  }
}

class FlightController {
  connection = false;
}

class Charger {
  turnOff = true;
}

// class Propeller { }




const startModel = new Motor();

const batteryStatus = startModel.startB();
console.log(batteryStatus);

console.log(startModel.startMotor());
startModel.startControls();
