
class Car {
  constructor(type, engine, maxSpeed) {
    this.type = type;
    this.engine = engine;
    this.maxSpeed = maxSpeed
  }
}


const cars = {
  models: [
    new Car('Mazda', 'V4', 300),
    new Car('BMW', 'V8', 320)
  ],
  showCar() {
    for (let car of this.models) {                  // this point to cars obj
      const liCar = document.createElement('li');
      liCar.innerHTML = `
        <p>${car.type} with ${car.engine} engine have max speed ${car.maxSpeed} km\/h</p>  `;
      document.getElementById('app').append(liCar);
    }
  },

  //  Remove Btn
  // removeCars() {
  //   const remBtn = document.createElement('button');
  //   remBtn.textContent = 'remove btn';
  //   remBtn.addEventListener('click', () => this.models.splice(0, 1));
  //   document.getElementById('app').append(remBtn)
  // }
};

cars.showCar();

// cars.removeCars()
console.log(cars);



