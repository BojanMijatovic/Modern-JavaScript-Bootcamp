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
const sortByRank = shop.sort((a, b) => b.ranking - a.ranking);
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

const test = removeItem('sox', shop)
const test1 = removeItem('tie', shop)
console.log(test);

console.log(shop);
