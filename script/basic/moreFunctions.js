
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


