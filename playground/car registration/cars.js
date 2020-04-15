
const cars = {
  models: [],

  addCars(car, model, engine) {
    this.models.push({ 'car': car, 'model': model, 'engine': engine })
  },

  findCar(cars, name) {
    return cars.filter(car => car.car.toLowerCase() === name.toLowerCase())
  },

  removeCar(cars, name) {
    const index = cars.findIndex(car => car.car.toLowerCase() === name.toLowerCase());
    if (index > -1) {
      this.models.splice(index, 1);
    }
  },

  sortByName(cars) {
    cars.sort((a, b) => {
      if (a.car < b.car) {
        return -1
      } else if (b.car < a.car) {
        return 1
      } else {
        return 0
      }
    })
  },

  allCars() { // just return list off all cars
    return this.models.forEach(model => console.log(`${model.car} type ${model.model}`));
  }
}

cars.addCars('Volvo', 'Z41', 'V8');
cars.addCars('Alfa Romeo', '145', 'V16');
cars.addCars('BMW', '5', 'V8');
cars.addCars('BMW', 'M7', 'V12');
cars.addCars('Mercedes', 'AMG', 'V8');
console.log(cars);

console.log(cars.findCar(cars.models, 'bmw'));

// cars.removeCar(cars.models, 'Mercedes');  //removing 
// cars.removeCar(cars.models, 'Alfa Romeo');

// console.log(cars);

cars.sortByName(cars.models); // sorting by name 

//cars.allCars() //show all cars
