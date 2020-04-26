const cars = [];

// filters
const filters = {
  searchCar: ''
}

const addNewCarBtn = document.querySelector('#add-newCar');
const searchCars = document.querySelector('#search-cars');
let carList = document.querySelector('.cars');


const carForm = document.querySelector('#car-form');
// form
carForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (e.target.elements.addModel.value === '' || e.target.elements.addEngine.value === '') {
    return alert('Please insert model and type off engine')
  } else {
    cars.push({
      model: e.target.elements.addModel.value,
      engine: e.target.elements.addEngine.value,
    })
  }
  renderCars(cars, filters);
  e.target.elements.addModel.value = ''
  e.target.elements.addEngine.value = ''
})


//render cars
const renderCars = (cars, filters) => {
  const filteredCars = cars.filter(car => car.model.toLowerCase().includes(filters.searchCar.toLowerCase())); // filter cars

  //clear list 
  carList.innerHTML = ''

  filteredCars.forEach(car => {
    const newCar = document.createElement('p');
    newCar.innerHTML = `${car.model.toLowerCase()} with engine ${car.engine.toLowerCase()}`
    carList = document.querySelector('.cars');
    carList.append(newCar);
  })
}

renderCars(cars, filters)

// Input to search cars
searchCars.addEventListener('input', (e) => {
  filters.searchCar = e.target.value;
  renderCars(cars, filters)
})


