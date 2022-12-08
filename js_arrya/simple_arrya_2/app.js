let itCompany = [
  "Facebook",
  "Google ",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

let output = "";

for (let i = 0; i < 3; i++) {
  output = output + itCompany[i] + " ";
}

console.log(output);

output = "";
for (let i = itCompany.length - 1; i > itCompany.length - 4; i--) {
  output = output + itCompany[i] + " ";
}
console.log(output);

output = "";
for (i = 1; i < itCompany.length; i++) {
  console.log(itCompany[i]);
  output = output + itCompany[i] + " ";
}

output = "";
for (i = 0; i < itCompany.length - 1; i++) {
  console.log(itCompany[i]);
  output = output + itCompany[i] - 1 + " ";
}
