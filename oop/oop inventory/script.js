


class Inventory {

  constructor(amount, type, id) {
    this.id = id;
    this.type = type;
    this.amount = amount;
  }

  items = [];

  addInventory() {
    const item = new Inventory(4231, 'Pipes', 4);
    const newItem = new Inventory(513, 'Carbon', 153);
    const newItem1 = new Inventory(43, 'Pressure-Control', 13)
    this.items.push(item, newItem, newItem1);
    return this.items;
  }

  showItems() {
    this.items.forEach(item => {
      const newItem = document.createElement('p');
      newItem.innerHTML = `<p>We have ${item.amount} ${item.type}  with ID: ${item.id} in warehouse</p>`;
      document.body.append(newItem);
    }
    )
  }

  sortById() {
    this.items.sort((a, b) => {
      let fId = a.id;
      let sId = b.id;
      if (fId < sId) {
        return -1;
      } else if (fId > sId) {
        return 1;
      } else {
        return 0;
      }
    }
    )
  }
}



const addItem = new Inventory();
console.log(addItem.addInventory());




addItem.sortById();
addItem.showItems();
