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
  if (e.target.elements.addModel.value === '' || e.target.elements.addEngine.value === '' || target.elements.carYear.value === '') {
    return alert('Please insert model and type engine')
  } else {
    cars.push({
      id: id,
      model: e.target.elements.addModel.value,
      engine: e.target.elements.addEngine.value,
      year: e.target.elements.carYear.value
    })
  }
  saveCars()  // add to local storage
  renderCars(cars, filters);
  e.target.elements.addModel.value = ''
  e.target.elements.addEngine.value = ''
  e.target.elements.carYear.value = ''
})

// remove single Car 
const removeCar = (id) => {
  const carIndex = cars.findIndex(car => car.id === id)
  if (carIndex > -1) {
    cars.splice(carIndex, 1)
  }
}

//render cars
const renderCars = (cars, filters) => {
  let carList = document.querySelector('.cars');
  const filteredCars = cars.filter(car => car.model.toLowerCase().includes(filters.searchCar.toLowerCase())); // filter cars
  //clear list 
  carList.innerHTML = ''
  filteredCars.forEach((car) => {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'remove';
    const newCar = document.createElement('div');

    newCar.innerHTML = `${car.model.toLowerCase()} with engine ${car.engine.toLowerCase()} year off car ${car.year}`
    carList = document.querySelector('.cars');
    carList.append(newCar);
    carList.append(removeBtn);

    // remove single item
    removeBtn.addEventListener('click', () => {
      removeCar(car.id)
      saveCars()
      renderCars(cars, filters);
    });
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
})


// save to local storage
const saveCars = () => {
  return localStorage.setItem('cars', JSON.stringify(cars))
}
