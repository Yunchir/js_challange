let data = [
  "Засгийн",
  "газарт",
  "6.4",
  "сая",
  "тонн",
  "нүүрс",
  "алдагдсан",
  "гэх",
  "мэдээлэл",
  "ирээгүй",
  "байна.",
  "Бодит",
  "байдалд",
  "ийм",
  "их",
  "хэмжээний",
  "нүүрс",
  "алдагдсан",
  "гэх",
  "асуудал",
  "эргэлзээтэй",
  "байна.",
  "Хууль",
  "хяналтын",
  "байгууллага",
  "хяналт",
  "шалгалтын",
  "ажил",
  "явуулж",
  "байна",
];

console.log("Үгийн тоо " + data.length + " байна");

let word = "нүүрс";
let count = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] === word) {
    count++;
  }
}

console.log(word + " гэсэн үг " + count + " орсон байна");
