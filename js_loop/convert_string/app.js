let input = "This !big SMALL";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";

function converter(string) {
  let result = "";
  for (i = 0; string.length; i++) {
    if (upper.includes(string[i])) {
      result += string[i].toLowerCase();
    } else if (lower.includes(string[i])) {
      result += string[i].toUpperCase();
    } else {
      return result;
    }
    console.log(converter("hello"));
  }
}
