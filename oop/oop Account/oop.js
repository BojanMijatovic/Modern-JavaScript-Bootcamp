class Product {
  //  constructor method
  constructor(title, price, description) {
    this.title = title;                                     //properties
    this.price = price;
    this.description = description;
  }
}

class ProductItem {  //single Item Class
  constructor(product) {
    this.product = product;
  }


  renderSingleItem() {
    return `${this.product.title} ${this.product.price}$ = ${this.product.description}`
  }
}

class ProductList {
  products = [
    new Product('pants', 77, 'new summer collection'),
    new Product('t-shirt', 65, 'summer t-shirt')
  ];

  render() {
    this.products.forEach((product) => {
      const singleItem = new ProductItem(product)
      return console.log(singleItem.renderSingleItem());
    })
  }
}

const productList = new ProductList();
productList.render();
