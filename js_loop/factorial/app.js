let n = parseFloat(prompt("Ta duriin toogoo oruulnuu"));
let fact = n - 1;

while (fact > 0) {
  n = fact * n;
  fact--;
}
alert(n);
