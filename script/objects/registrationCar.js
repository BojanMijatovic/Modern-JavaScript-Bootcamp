const car = {
  model: 'Ford',
  type: 'E',
  startEngine: false,
  power: 450,
  color: 'red',
  turnEngine() {
    return this.startEngine = true;
  },
  stopCar() {
    return this.startEngine = false;
  },
  newColor() {
    return this.color = 'green'
  }
}

car.newColor();
car.turnEngine();
car.stopCar();

console.log(car);
