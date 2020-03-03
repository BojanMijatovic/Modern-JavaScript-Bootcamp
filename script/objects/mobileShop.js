
const mobileShop = {
  bankAccount: 400,
  mob: 180,
  gadgets: 20,
  tax: 0.2,
  buyPhone() {
    if (this.bankAccount > this.mob) {
      this.bankAccount -= this.mob;
      return `You have money to buy mob now you have ${this.bankAccount}$`
    } else {
      return `Sorry you don t have money for buy`
    }
  },
  addGadgets() {
    return this.bankAccount -= this.gadgets;
  },
  payTax() {
    let taxMob = ((this.mob + this.gadgets) * this.tax);
    return `Tax for shop is ${taxMob}$`
  }
}

mobileShop.buyPhone()
mobileShop.addGadgets()
console.log(mobileShop.payTax());
console.log(mobileShop.buyPhone());

console.log(mobileShop.buyPhone());

console.log(mobileShop);
