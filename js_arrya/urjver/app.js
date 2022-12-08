let a = [3, 45, 23, 78, 34];
let b = [4, 2, 34, 4, 12, 1];
let c = 0;
let i = 0;
let output = [];

while (i < a.length) {
  c = a[i] * b[i];
  output[i] = c;
  i++;
}
console.log(output);
