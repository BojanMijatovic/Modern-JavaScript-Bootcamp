
//  Starting point on Drone type 03 basic info 
const drone04 = {
  type: 1,
  connection: false,
  engine: false,
  speed: null,
  rotorTorque: 0,
  //  Sensors
  sensors: {
    gps: false,
    altitude: null,
    distance: null,
    battery: 100
  },
  signalStrength: 100,
  flightMode: {
    air: false,
    box: true,
    repair: false,
    simulation: false,
    start: false
  },
  damage: false,
  crash: null,
  repair: null,
  camera: false,
  antenna: true,
}

//  Start Drone
let startDrone = function (droneType) {
  droneType.connection = true;
  if (droneType.connection !== false) {
    droneType.engine = 4;
    droneType.speed = 0;
    droneType.rotorTorque = 10;
    droneType.sensors.gps = true;
    droneType.camera = true;
    droneType.flightMode.box = false;
    droneType.flightMode.start = true;
  } else {
    return console.log(`Please check connection`);
  }
}

let startLiftOff = function (droneType, speed) {
  droneType.speed = droneType.speed += speed;
  if (droneType.speed >= 7) {
    droneType.rotorTorque = speed *= droneType.rotorTorque;
    droneType.flightMode.start = false;
    droneType.flightMode.air = true;
  } else {
    return console.log(`Your speed is ${droneType.speed} please power up speed`);
  }
}

let a = startDrone(drone04);
let b = startLiftOff(drone04, 7);
// console.log(b);

// console.log(drone04);
