let a = "1234321";
function splitePal(a) {
  let b = a.split("");
  let c = b.reverse();
  let d = c.join("");

  if (d == a) {
    return true;
  } else {
    return false;
  }
}
console.log(splitePal(a));
