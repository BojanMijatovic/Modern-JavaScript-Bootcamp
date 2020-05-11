const tempInCelsius = document.querySelector('#tempC');
const convertFBtn = document.querySelector('#convertF');
const resultList = document.querySelector('.show-results');

const clearInput = () => {
  tempInCelsius.value = ''
}

const convertToFahrenheit = () => {
  const newTemp = document.createElement('p');
  newTemp.classList.add('temp');
  newTemp.innerHTML = `Temp in Fahrenheit is ${(tempInCelsius.value * 1.8) + 32} degreases celsius`;
  if (tempInCelsius.value === '') {
    alert('Insert real value')
  }
  resultList.append(newTemp);
  clearInput();
}

convertFBtn.addEventListener('click', convertToFahrenheit);
