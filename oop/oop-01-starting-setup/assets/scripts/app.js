
//  First Class 
class Product {
  title = 'Default'; // These are fields
  imgUrl;
  description;
  price;
}

const productList = {
  products: [
    {
      title: 'Pillow',
      imgUrl: 'https://i1.adis.ws/i/hanoverdirect/24_Boudoir?$small$',
      price: 19.90,
      description: 'soft pillow'
    }, {
      title: 'Carpet',
      imgUrl: 'https://lda.lowes.com/is/image/Lowes/DP18-158886_1-1_DT_Vinyl-Flooring_Hero-BNR_IMG?scl=1',
      price: 88.90,
      description: 'Persian Carpet'
    }
  ],

  renderProduct() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (let prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div> <img src="${prod.imgUrl}" alt="${prod.title}" >
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
            </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.renderProduct();