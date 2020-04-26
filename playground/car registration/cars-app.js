let cars = [];

// filters
const filters = {
  searchCar: ''
}

const searchCars = document.querySelector('#search-cars');

const carJSON = localStorage.getItem('cars');
if (carJSON !== null) {
  cars = JSON.parse(carJSON);
}

const carForm = document.querySelector('#car-form');
// form
carForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = uuidv4(); // add Id to cars
  if (e.target.elements.addModel.value === '' || e.target.elements.addEngine.value === '') {
    return alert('Please insert model and type off engine')
  } else {
    cars.push({
      id: id,
      model: e.target.elements.addModel.value,
      engine: e.target.elements.addEngine.value,
    })
  }
  localStorage.setItem('cars', JSON.stringify(cars)) // add to local storage
  renderCars(cars, filters);
  e.target.elements.addModel.value = ''
  e.target.elements.addEngine.value = ''
})


//render cars
const renderCars = (cars, filters) => {
  let carList = document.querySelector('.cars');
  const filteredCars = cars.filter(car => car.model.toLowerCase().includes(filters.searchCar.toLowerCase())); // filter cars

  //clear list 
  carList.innerHTML = ''

  filteredCars.forEach((car) => {
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

// remove all cars
const removeAll = document.querySelector('#removeAll');
removeAll.addEventListener('click', (e) => {
  cars.splice(0, cars.length);
  localStorage.removeItem('cars');
  renderCars(cars, filters)
}
)