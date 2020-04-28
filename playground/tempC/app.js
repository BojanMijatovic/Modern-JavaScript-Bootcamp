const tempValue = document.querySelector('#temp').value;

if (tempValue === '') {
  alert(`Please insert temperature value`)
}

const convertTemperature = () => {
  const showConvert = document.createElement('p');
  const newTemp = (tempValue * 1.8) + 32;
  showConvert.textContent = `Temp in Fahrenheit is ${newTemp}`;
  document.querySelector('.result').append(showConvert);
}

const convertBtn = document.querySelector('button');
convertBtn.addEventListener('click', convertTemperature)
