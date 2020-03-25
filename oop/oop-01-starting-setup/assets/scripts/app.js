
//  First Class 
class Product {
  // title = 'Default'; // These are fields
  // imgUrl;
  // description;
  // price;

  constructor(title, img, desc, price) { // These are property
    this.title = title;
    this.imgUrl = img;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  renderProductItem() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div> <img src="${this.product.imgUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
            </div>
        </div>
      `;
    const addCartBtn = prodEl.querySelector('button');
    addCartBtn.addEventListener('click', this.addToCart.bind(this));     // this refer
    return prodEl;
  }

  addToCart() {
    console.log('Card added');
    console.log(this.product);
  }
}

class ProductList {
  products = [
    new Product('Pillow', 'https://i1.adis.ws/i/hanoverdirect/24_Boudoir?$small$', 'soft pillow', 19.90),
    new Product('Carpet', 'https://lda.lowes.com/is/image/Lowes/DP18-158886_1-1_DT_Vinyl-Flooring_Hero-BNR_IMG?scl=1', 'Persian Carpet', 88.90)
  ]
  constructor() { }
  renderProduct() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (let prod of this.products) {
      const newProduct = new ProductItem(prod);
      const prodEl = newProduct.renderProductItem();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();

productList.renderProduct();