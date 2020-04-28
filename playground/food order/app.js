const orders = [];

const foodForm = document.querySelector('#foodOrder');

const orderFood = (e) => {
  e.preventDefault()
  let food = document.querySelector('#addFood').value;
  let amount = document.querySelector('#addAmount').value;
  orders.push({ food: food, amountFood: amount })
}

foodForm.addEventListener('submit', orderFood)

