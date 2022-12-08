const ver = "This is Where I begin";
function paravar(s) {
  s = s.toLowerCase();
  s = s.split(" ");
  s = s.join("-");
  return s;
}
console.log(paravar(ver));
