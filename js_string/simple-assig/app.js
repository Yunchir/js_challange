let firstName = prompt("uuriin ner");
let lastName = prompt("ovog");
firstName = firstName.length;
lastName = lastName.length;
if (firstName < lastName) {
  console.log("Tanii etsegiin ner urt baina");
} else if (firstName > lastName) {
  console.log("Tanii uuriin ner urt baina");
} else {
  console.log("Etsegiin ner bolon tanii nernii usgiin too tentsuu baina");
}

//Бүх тэмдэгтүүдийг жижиг үсгээр бичнэ үү.
let a = "i LOVE you";
console.log(a.toLowerCase());

//Бүх тэмдэгтүүдийг том үсгээр бичнэ үү.
console.log(a.toUpperCase());

//4.нэг мөр болгон нэгтгэнэ
let pineconeacademy = "Pinecone academy";
let leap = " leap хөтөлбөрт";

console.log(pineconeacademy.concat(leap));

//өгүүлбэр зохионо
lastPart = "Yunchir";
firstPart = "Ulaanbandi";
country = "Mongolia";
city = "Ulaanbaatar";
age = 19;
job = "Ajil";

console.log(
  firstPart +
    " ovogtoi " +
    lastPart +
    " ni " +
    city +
    " -t amidardag. " +
    lastPart +
    " -iin " +
    job +
    " ni programmist."
);

//console.log() болон escape тэмдэгтүүдийг ашиглана

console.log("1 2 3 4 5 \n2 3 4 5 \n3 4 5 \n4 5 \n5");
