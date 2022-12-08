let ArrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let sum = 0;
for (i = 0; i < ArrayOfNumbers.length; i++) {
  sum += ArrayOfNumbers[i];
}
console.log(sum);

let max = "";
for (i = 0; i < ArrayOfNumbers.length; i++) {
  if (ArrayOfNumbers[i] > max) {
    max = ArrayOfNumbers[i];
  }
}
console.log(max);

let min = ArrayOfNumbers[0];
for (i = 1; i < ArrayOfNumbers.length; i++) {
  if (ArrayOfNumbers[i] < min) {
    min = ArrayOfNumbers[i];
  }
}
console.log(min);

console.log([33].concat(ArrayOfNumbers));
ArrayOfNumbers[ArrayOfNumbers.length] = 10;
console.log(ArrayOfNumbers);
