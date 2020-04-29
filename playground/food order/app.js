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
  amount: 1,
  completed: true
},
{
  food: 'pasta',
  spices: 'cheese',
  amount: 1,
  completed: false
}];


// filter orders left
const ordersLeft = orders.filter(order => !order.completed);    // return num orders with false completed
const showOrdersLeft = document.createElement('p');
showOrdersLeft.textContent = `You have more ${ordersLeft.length} orders to complete`;
document.body.append(showOrdersLeft)


orders.forEach(order => {
  const newOrder = document.createElement('p');
  newOrder.textContent = `${order.food} with ${order.spices}`;
  document.querySelector('.orders').append(newOrder);
})

