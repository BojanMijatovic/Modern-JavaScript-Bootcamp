const orders = [];

const filters = {
  searchText: '',
  hideCompleted: false
}

const addOrderBtn = document.querySelector('#addOrder');
const removeAllBtn = document.querySelector('#removeBtn');
const orderList = document.querySelector('.orders');
const searchOrders = document.querySelector('#searchOrders');
const formOrder = document.querySelector('#foodOrder');


// show single order
orders.forEach(order => {
  const newOrder = document.createElement('p');
  newOrder.textContent = `${order.food} with ${order.spices} amount ${order.amount}`;
  orderList.append(newOrder);
})

const orderFood = (e) => {
  console.log(e)
}

const removeAll = () => {
  console.log(`Remove all orders`);
  orderList.remove()
  orders.splice(0, orders.length);
  console.log(orders);
}


const renderOrders = (orders, filters) => {
  const renderedOrders = orders.filter(order => order.food.toLowerCase().includes(filters.searchText.toLowerCase()))

  orderList.innerHTML = ''
  // filter orders left
  const ordersLeft = renderedOrders.filter(order => !order.completed);    // return num orders with false completed

  const showLeft = document.createElement('p');
  showLeft.textContent = `You have more ${ordersLeft.length} orders to complete`;
  orderList.append(showLeft)

  renderedOrders.forEach(order => {
    const newOrder = document.createElement('p');
    newOrder.textContent = `${order.food} ${order.amount} meal`;
    orderList.append(newOrder)
  })
}

renderOrders(orders, filters);

const addFoodHandler = (e) => {
  const newOrder = document.createElement('p');
  newOrder.textContent = e.target.value;
  orderList.append(newOrder);
}

const searchOrdersRender = (e) => {
  filters.searchText = e.target.value;
  renderOrders(orders, filters);
}

const formOrderHandler = (e) => {
  e.preventDefault();
  orders.push({
    food: e.target.addFood.value,
    amount: e.target.addAmount.value,
    completed: false
  })
  renderOrders(orders, filters);
  e.target.addFood.value = '';
  e.target.addAmount.value = '';
}




searchOrders.addEventListener('input', searchOrdersRender)
addOrderBtn.addEventListener('click', orderFood);
removeAllBtn.addEventListener('click', removeAll);
formOrder.addEventListener('submit', formOrderHandler);

document.querySelector('#test').addEventListener('change', (e) => {
  console.log(e.target.checked);
  filters.hideCompleted = e.target.checked;
  renderOrders(orders, filters);
}
)