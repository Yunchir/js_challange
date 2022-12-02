let x = parseFloat(prompt("Tegsh too oruulnuu"));
let num = 0;
let output = "";

while (x > 0) {
  if (x % 2 == 0) {
    output = output + x + " ";
    // num = num - 2;
  }
  x--;
}
alert(output);
