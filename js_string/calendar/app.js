// let ognoo = prompt("он, сар, өдөр");
// // let ognoo = "2022, 3, 1";

// let year = ognoo.substring(0, ognoo.indexOf(","));

// ognoo = ognoo.substring(ognoo.indexOf(",") + 2);

// let month = ognoo.substring(0, ognoo.indexOf(","));

// ognoo = ognoo.substring(ognoo.indexOf(",") + 2);

// let day = ognoo.substring(0, ognoo.length);

// if (month >= 1 && month <= 12) {
//   month = month.length == 1 ? "0" + month : month;
// } else {
//   month = "iim sar bhku";
// }
// if (day >= 1 && day <= 31) {
//   day = day.length == 1 ? "0" + day : day;
// } else {
//   day = "iim udur bhku";
// }
// alert(year + "-" + month + "-" + day);

// Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг (Unitel, Mobicom, G-Mobile, Skytel) хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх

let num = prompt("phone number");
if (num.length == 8) {
  let phone = num.substring(0, 2);
  if (phone == 88 || phone == 89) {
    alert("Tanii dugaar unitel-iin dugaar baina.");
  } else if (phone == 99 || phone == 95 || phone == 85) {
    alert("Tanii dugaar mobi-iin dugaar baina.");
  } else if (phone == 91 || phone == 90 || phone == 87) {
    alert("Tanii dugaar Skytel-iin dugaar baina.");
  } else if (phone == 98 || phone == 83) {
    alert("Tanii dugaar G - Mobile-iin dugaar baina.");
  } else alert("uuchlaarai tanii utga buruu baina");
} else {
  alert("Utasnii dugaar 8 orontoi baina!");
}
