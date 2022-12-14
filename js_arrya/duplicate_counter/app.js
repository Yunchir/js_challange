duplicate = [
  "2",
  "3",
  "4",
  "3",
  "4",
  "5",
  "3",
  "1",
  "1",
  "4",
  "1",
  "1",
  "1",
  "1",
];
var count = {};
duplicate.forEach(function (i) {
  count[i] = (count[i] || 0) + 1;
});

console.log(count);
