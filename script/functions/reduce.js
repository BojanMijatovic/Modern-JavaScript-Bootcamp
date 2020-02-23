const shop = [{
  product: 'shoes',
  price: 200,
  ranking: 2
}, {
  product: 'tie',
  price: 25,
  ranking: 1
}, {
  product: 'pants',
  price: 75,
  ranking: 4
}, {
  product: 'hat',
  price: 40,
  ranking: 5
}, {
  product: 't-shirt',
  price: 105,
  ranking: 2
}, {
  product: 'sox',
  price: 6,
  ranking: 3
}]

//  Sort by rank
// const sortByRank = shop.sort((a, b) => b.ranking - a.ranking);
// console.log(sortByRank);

//  List by rank
const listItems = shop.filter(item => {
  if (item.ranking > 3) {
    // return console.log(`You have ${item.product} by this price ${item.price}$`);
  }
})

//  Remove item from array
const removeItem = (findProduct, items) => {
  findProduct;
  const buyItem = items.find(item => {
    return item.product.toLowerCase().includes(findProduct.toLowerCase())
  })
  if (buyItem) {
    items.splice(items.indexOf(buyItem), 1)
  }
  return findProduct;
}

// const test = removeItem('sox', shop)
// const test1 = removeItem('tie', shop)
// console.log(test);
// console.log(shop);

//  Add new item to shop 
// const addProduct = (store, product, price, ranking) => {
//   store.push({ product, price, ranking })
// }
// const a = addProduct(shop, 'tape', 50, 1);
// console.log(shop);

//  Find obj by product 
const findItem = shop.find(item => item.product.toLowerCase() === 'sox')
// console.log(findItem);
const showItem = function (item) {
  return console.log(`You found ${item.product} with price ${item.price}$`);
};
// showItem(findItem);

//  sort by rank off product 
// const sortByRank = shop.sort((a, b) => b.ranking - a.ranking);
// console.log(sortByRank);

//  Calc all items
const calcItems = shop.reduce((total, current) => {
  return { price: total.price + current.price }
})
console.log(calcItems);



//  Find index in array 
// if (findItem) {
//   return console.log(shop.indexOf(findItem));
// }

const test = 'SOX';
// const findItem = shop.findIndex((store, i) => {
//   i = test.toLowerCase();
//   return store.product.toLowerCase() === i;
// })
// console.log(findItem);

//  Filter by price 
// const test1 = (filter, store) => {
//   return filterItem = store.filter(item => item.price >= filter);
// }
// console.log(test1(100, shop));


