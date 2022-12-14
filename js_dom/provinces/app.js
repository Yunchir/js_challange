// ehnii aimag
let firstProvince = document.getElementsByTagName("li")[0];
console.log(firstProvince);

// suuln aimag
let province = document.querySelectorAll("li");
let lenth = province.length;
let lastProvince = document.getElementsByTagName("li")[lenth - 1];
console.log(lastProvince);

// Sukhbaatar aimagiig hevel
let Sukhbaatar = document.getElementById("aimag-315");
console.log(Sukhbaatar);

//zagvar oruulah
let zagvar = document.getElementById("aimagNames");
zagvar.style.backgroundColor = "rgb(33, 131, 235)";
zagvar.style.color = "white";
zagvar.style.pontSize = "24px";
zagvar.style.padding = "10px";
zagvar.style.listStyle = "none";
zagvar.style.boxSizing = "border-box";
zagvar.style.border = "3px solid cyan";
zagvar.style.fontFamily = "Sans-serif";
