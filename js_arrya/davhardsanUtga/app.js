let a = [4, 2, 34, 4, 1, 12, 1, 4];
output = "";
for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[j] == a[i]) {
      output += a[i];
      //   break;
    }
    output++;
  }
}
console.log(output);
