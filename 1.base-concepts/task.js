"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  let x1;
  let x2;
  if(d < 0) {
    arr = [];
  } else if(d === 0) {
    x1 = -b/(2*a);
    arr = [x1];
  } else {
    x1 = (-b + Math.sqrt(d))/(2*a);
    x2 = (-b - Math.sqrt(d))/(2*a);
    arr = [x1,x2];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let monthlyPayment = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let summ = ((monthlyPayment * countMonths).toFixed(2));
  summ = Number(summ);
  return summ;
}