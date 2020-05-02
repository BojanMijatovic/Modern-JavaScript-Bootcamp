const orders = [{
  food: 'burger',
  spices: 'chili',
  amount: 1,
  completed: false
},
{
  food: 'meat',
  spices: 'origan',
  amount: 1,
  completed: false
}, {
  food: 'soup',
  spices: 'chili',
  amount: 2,
  completed: true
},
{
  food: 'pasta',
  spices: 'cheese',
  amount: 4,
  completed: false
}];


const filters = {
  searchText: ''
}

const addOrderBtn = document.querySelector('#addOrder');
const removeAllBtn = document.querySelector('#removeBtn');
const orderList = document.querySelector('.orders');
const searchOrders = document.querySelector('#searchOrders');
const addFood = document.querySelector('#addFood');

// filter orders left
const ordersLeft = orders.filter(order => !order.completed);    // return num orders with false completed
const showLeft = document.createElement('p');
showLeft.textContent = `You have more ${ordersLeft.length} orders to complete`;
document.body.append(showLeft)


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

  renderedOrders.forEach(order => {
    const newOrder = document.createElement('p');
    newOrder.textContent = order.food;
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


searchOrders.addEventListener('input', searchOrdersRender)
addOrderBtn.addEventListener('click', orderFood);
removeAllBtn.addEventListener('click', removeAll);
addFood.addEventListener('input', addFoodHandler)