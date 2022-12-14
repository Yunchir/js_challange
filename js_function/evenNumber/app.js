let num = 10;
let num1 = 20;
output = [];

function even(a, b) {
  let j = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      output[j] = i;
      j++;
    }
  }
  return output;
}

function odd(a, b) {
  let j = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 == 1) {
      output[j] = i;
      j++;
    }
  }
  return output;
}

console.log(even(num, num1));
