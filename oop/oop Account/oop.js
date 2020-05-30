
class Product {
  title = 'default';
  price;
  description;
}


console.log(new Product());

const productsList = {
  products: [
    {
      title: 'shoes',
      price: 144,
      description: 'new collection'
    },
    {
      title: 't-shirt',
      price: 87,
      description: 'summer t-shirt'
    }
  ],
  renderProducts() {
    this.products.forEach((product, id) => {
      return console.log(` ${id + 1} ${product.title} ${product.price}$`);
    })
  }
}

// productsList.renderProducts();