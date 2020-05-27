const products = [];

const addProduct = (products, name, amount, value) => {
  const newProduct = {
    name,
    amount,
    value,
    id: Math.random()
  }
  products.push(newProduct)
}

const showProducts = (products) => {
  products.forEach((prod, id) => {
    return console.log(`${id + 1}: ${prod.name} cost ${prod.value}$`);
  })
}


const findProduct = (products, prodName) => {
  const productIndex = products.filter(prod => prod.name.includes(prodName));
  return console.log(productIndex);
}


const removeProduct = (products, prodName) => {
  const productIndex = products.findIndex(prod => prod.name === prodName);
  return products.splice(productIndex, 1)
}


// sort products 
const sortProductsByPrice = (products) => {
  products.sort((a, b) => {
    if (a.value < b.value) {
      return -1
    } else if (b.value < a.value) {
      return 1
    } else {
      return 0
    }
  })
}


addProduct(products, 'beer', 4, 0.2);
addProduct(products, 'bred', 1, 0.15);
addProduct(products, 'car', 1, 1200);
addProduct(products, 'drugs', 20, 17);
addProduct(products, 'pizza', 4, 8);

// removeProduct(products, 'car')
// removeProduct(products, 'beer')

console.log(products);

sortProductsByPrice(products)
// findProduct(products, 'beer')
// findProduct(products, 'b')

showProducts(products)