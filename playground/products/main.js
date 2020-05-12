
const title = document.querySelector('.title');
title.classList.add('mainTitle');
title.textContent = 'Welcome to Products'

const app = document.querySelector('.app');

const productList = [];

const products = document.createElement('div');
products.className = 'mainApp';
products.innerHTML = `
  <label class="product">Add new Product:<input type="text" class="add-product" /></label>
    <label class="amount">Add amount off product:<input type="text" class="add-product__amount" /></label>
  <button class="add-btn">add new product</button>
  `;
app.append(products);

const prodValue = document.querySelector('.add-product');
const prodValueAmount = document.querySelector('.add-product__amount');
const addNewProductBtn = document.querySelector('.add-btn');


const addNewProductHandler = () => {

  const newProd = {
    name: prodValue.value,
    amount: prodValueAmount.value
  }

  if (newProd.name.trim() === '' || newProd.amount.trim() === '') {
    alert('Insert real values');
  }

  productList.push({ newProd })
  prodListHandler(newProd.name, newProd.amount)
  console.log(productList);
}


const prodListHandler = (name, amount) => {
  const prodItemsList = document.createElement('div');
  prodItemsList.innerHTML = `
<div>
<h3>${name}</h3>
<p>${amount}</p>
<button class="details">show details</button>
</div>
`;
  products.append(prodItemsList);
}



addNewProductBtn.addEventListener('click', addNewProductHandler);
