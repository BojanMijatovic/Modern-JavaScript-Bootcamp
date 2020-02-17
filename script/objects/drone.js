
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
console.log(drone04);
//  Start Drone
let startDrone = function (droneType) {
  droneType.connection = true;
  droneType.engine = 4;
  droneType.speed = 0;
  droneType.rotorTorque = 10;
  droneType.sensors.gps = true;
  droneType.camera = true;
  droneType.flightMode.box = false;
  droneType.flightMode.start = true;
}

let a = startDrone(drone04);

console.log(drone04);
