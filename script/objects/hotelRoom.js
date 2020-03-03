
const hotelCheck = {
  freeRooms: 20,
  gests: 0,
  checkedRoom() {
    this.freeRooms -= this.gests;
    return this.freeRooms;
  },
  reserveRoom() {
    if (this.freeRooms > this.gests) {
      return `Welcome you have ${this.freeRooms} free rooms now`
    } else {
      return `Sorry we do not have free rome now `
    }
  },
  addGest(newGest) {
    this.gests += newGest;
    return this.gests;
  }
}

hotelCheck.addGest(4);
hotelCheck.addGest(4);
console.log(hotelCheck.gests);
console.log(hotelCheck.checkedRoom());
console.log(hotelCheck.reserveRoom());
console.log(hotelCheck);
