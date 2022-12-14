let pay = 27500;

function tulbur(number) {
  if (5000 < number && 30000 > number) {
    return (number * 15) / 100 + number;
  } else (number * 20) / 100 + number;
}

console.log(tulbur(pay));

function tulbur2(number) {
  if (5000 < number && 30000 > number) {
    return (number * 15) / 100;
  } else {
    (number * 20) / 100;
  }
}
console.log(tulbur2(pay));
