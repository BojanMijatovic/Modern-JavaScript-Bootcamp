

const product = {
  name: 'beer',
  amount: 1,
  price: 2.5,
  sayHello: () => {
    console.log(`Hold my ${product.name}`);
  },
  stateSale: {
    state: 'Serbia',
    city: 'Ns'
  },
  addProduct: (newP) => {
    product.newProduct = { name: newP }
  },
  removeHello: () => {
    delete product.sayHello
  }
}

// product.removeHello();
// product.sayHello()
// delete product.amount;
product.addProduct('test');
console.log(product);
