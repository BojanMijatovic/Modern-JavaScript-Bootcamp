
const title = document.querySelector('.title');
title.classList.add('mainTitle');
title.textContent = 'Welcome to Products'

const productList = [];

const app = document.querySelector('.app');

const products = document.createElement('div');
products.classList.add('mainApp');
products.innerHTML = `
  <label class="product">Add new Product:<input type="text" class="add-product__name" /></label>
    <label class="amount">Add amount off product:<input type="text" class="add-product__amount" /></label>
  <button class="add-btn">add new product</button>
  `;
app.append(products);

const prodValue = document.querySelector('.add-product__name');
const prodValueAmount = document.querySelector('.add-product__amount');
const addNewProductBtn = document.querySelector('.add-btn');


const addNewProductHandler = () => {
  // create new obj
  const newProd = {
    name: prodValue.value,
    amount: prodValueAmount.value
  }
  // validation off input
  if (newProd.name.trim() === '' || newProd.amount.trim() === '') {
    alert('Insert real values');
  }
  // add to array of products
  productList.push({ newProd })
  prodListHandler(newProd.name, newProd.amount)
  console.log(productList);
}

const prodListHandler = (name, amount) => {
  const prodItemsList = document.createElement('div');
  prodItemsList.className = 'product-item'
  prodItemsList.innerHTML = `
<div>
<h3 class="product-item__name">Name: ${name}</h3>
<p class="product-item__amount">Amount: ${amount}</p>
<button class="showMark">show mark</button>
</div>
`;
  products.append(prodItemsList);

}



addNewProductBtn.addEventListener('click', addNewProductHandler);
