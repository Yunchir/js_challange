let clock = document.getElementById("time");
let a = document.getElementById("time");
a.style.backgroundColor = "black";
a.style.color = "white";
a.style.fontSize = "28px";
a.style.padding = "10px";
a.style.borderRadius = "50px";
a.style.textAlign = "center";
a.style.width = "300px";
a.style.margin = "100px";

dsec = 0;
sec = 0;
min = 0;

setInterval(function () {
  dsec++;
  if (dsec == 100) {
    dsec = 0;
    sec++;
  } else if (sec == 60) {
    sec = 0;
    min++;
  } else if (min == 60) {
    min = 0;
  }
  clock.innerText = `${min < 10 ? 0 : ""}${min}:${
    sec < 10 ? 0 : ""
  }${sec}:${dsec}`;
}, 10);
