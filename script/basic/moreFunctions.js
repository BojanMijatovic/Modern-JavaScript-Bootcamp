
//  Calc Student score 

let calcStudentScore = function (score, totalScore = 20) {
  let studentScore = (score / totalScore) * 100;
  if (studentScore >= 90) {
    return console.log(`You have ${studentScore}% and you got A`);
  } else if (studentScore < 89 && studentScore >= 80) {
    return console.log(`You have ${studentScore}% and you got B`);
  }
  else if (studentScore < 80 && studentScore >= 69) {
    return console.log(`You have ${studentScore}% and you got C`);
  }
  else if (studentScore < 70 && studentScore >= 60) {
    return console.log(`You have ${studentScore}% and you got D`);
  }
  else {
    return console.log(`You have ${studentScore}% and you got F`);
  }
}

// let a = calcStudentScore(18);
// let b = calcStudentScore(16);
// let c = calcStudentScore(15);
// let d = calcStudentScore(14);
// let f = calcStudentScore(12);
// let e = calcStudentScore(10);


//  return functions as value 


const tempCalc = function (temp) {
  return function (nowTemp) {
    if (nowTemp < temp) {
      return `Out is freeze`
    } return `Nothing cold`
  }
}
const isCold = tempCalc(4);

// let a = isCold(5);
// console.log(a);



const statusTotal = function (sum) {
  return function (firstSum) {
    if (firstSum > sum) {
      return `We have ${sum}`
    } return `We are below budget for ${firstSum - sum}$`
  }
}
const isTotalOk = statusTotal(300);

// let a = isTotalOk(200);
// console.log(a);


const checkPass = function (user) {
  return function (acc) {
    //  user is from checkPass arg
    return acc.length > user.length
  }
}

const test = checkPass('test')

// a = test('testing123');
// console.log(a);


const addNum = function (num) {
  return function (a) {
    return a + num;
  }
}
const num = addNum(5);

// let a = num(14);
// let b = num(22);

// console.log(a);
// console.log(b);


//  Mobile Shop
let accountDeposit = 200;
const tax = 0.2;
const buySomeGadgets = 30;
const mobilePhone = 70;

//  Buy Phone
const buyPhone = function (phone, deposit, taxes) {
  let taxesSum = phone * taxes;
  deposit = deposit -= (phone + taxesSum);

  if (deposit > 0) {
    return `You are now buy some tel for ${phone}$ and you have more ${deposit}$`
  }
  return `Sorry you are off budget now`;
}

console.log(buyPhone(mobilePhone, accountDeposit, tax));

//  Count Taxes 
const countTaxes = function (mobile, tax) {
  return mobile * tax;
}

console.log(countTaxes(mobilePhone, tax));

// Check Account Status 
const checkAccStatus = function (acc, ) {

}
