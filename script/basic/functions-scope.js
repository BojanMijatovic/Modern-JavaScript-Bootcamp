
// function color() {
//   const c = 'red'
//   let age = 20;
//   console.log(c);
// }

// function blue() {
//   const c = 'blue';
//   let age = 32;
//   console.log(c);
// }

// color();
// blue();

//  Lexical Scope
let outer = function () {
  let test = 'Testing';

  //  Inner function
  let inner = function () {
    // let test = 'test';

    //  Deeper Function
    let moreInner = function () {
      // let test = 'Is this real test';
      console.log(test.toUpperCase());
    }
    moreInner();
  }
  inner();
}
// outer();


// Function Expression
const add = function (a, b) {
  return a + b;
}
// console.log(add(4, 2));


//  Function Expression with name
const sumNums = function add(x, y) {
  return x + y;
}
// console.log(sumNums(1, 10));


// Function declaration
function addNums(x, y) {
  return x + y;
}
// console.log(addNums(4, 3));
