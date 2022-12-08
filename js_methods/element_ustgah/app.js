let number = [2, 3, 4, 5, 6];
let Nu = 5;
function removeArrayElement(a) {
  let rem = a.splice(a.indexOf(Nu), 1);
  return rem;
}

console.log(removeArrayElement(number), number);
