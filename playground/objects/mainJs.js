
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



addProduct(products, 'beer', 4, 0.2);
addProduct(products, 'bred', 1, 0.15);
addProduct(products, 'car', 1, 1200);
addProduct(products, 'drugs', 20, 17);

console.log(products);
showProducts(products)

findProduct(products, 'beer')

findProduct(products, 'b')

