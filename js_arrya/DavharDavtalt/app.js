let a = 5;
output = "";

for (let col = 1; col <= a + 1; col++) {
  for (let row = 1; row != col; row++) {
    output = output + row + " ";
  }
  output = output + "\n";
}
console.log(output);

output = "";
for (let col = 1; col <= a + 1; col++) {
  for (let row = a; row > col - 1; row--) {
    output = output + row + " ";
  }
  output = output + "\n";
}

console.log(output);
