
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
// const add = function (a, b) {
//   return a + b;
// }
// console.log(add(4, 2));


//  Function Expression with name
// const sumNums = function add(x, y) {
//   return x + y;
// }
// console.log(sumNums(1, 10));


// Function declaration
// function addNums(x, y) {
//   return x + y;
// }
// console.log(addNums(4, 3));

//  Functions as arguments
// const callNums = function (addFunction) {
//   return addFunction(3, 2);
// }

// const addFunction = function (x, y) {
//   return x + y;
// }
// console.log(callNums(addFunction));



//  High order Functions
// function testing() {
//   console.log('This is test');
// }

// const callMeMore = function (action, num) {
//   for (let i = 0; i < num; i++) {
//     return action(4, 2);
//   }
// }

// function actionFunc(x, y) {
//   return x + y;
// }


// let a = callMeMore(actionFunc, 5);
// console.log(a);
// callMeMore(testing, 5);



//  Function as return value
// const triple = multiplyBy(3);
// function multiplyBy(x) {
//   return function (y) {
//     return x + y;
//   }
// }

// console.log(triple(5));


//  Function as return value
// const isColdOrWarm = function (a, b) {
//   return function (temp) {
//     return a < temp && temp < b
//   }
// }

// const calcTemp = isColdOrWarm(2, 34);
// let a = calcTemp(15);
// console.log(a);


//  Create function declaration
let testAddNums = function (num) {
  return function (x) {
    return x + num;
  }
}
const addNums = testAddNums(4);

// let a = addNums(2);
// console.log(a);

//  Check password length
const checkAcc = function (num) {
  return function (password) {
    return password.length >= num;
  }
}
const isAccount = checkAcc('user');
console.log(isAccount(7));
