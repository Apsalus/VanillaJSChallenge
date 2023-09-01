const result = document.querySelector(".js-clock");

function getClock() {
  const chrimas = new Date("2023-12-25");
  const today = new Date();
  const day = chrimas - today;
  const dDay = String(Math.floor(day / (1000 * 60 * 60 * 24))).padStart("2", 0);
  const dHours = String(Math.floor((day / (1000 * 60 * 60)) % 24)).padStart(
    "2",
    0
  );
  const dMin = String(Math.floor((day / (1000 * 60)) % 60)).padStart("2", 0);
  const dSec = String(Math.floor((day / 1000) % 60)).padStart("2", 0);

  result.innerText =
    dDay + " 일 " + dHours + " 시간 " + dMin + " 분 " + dSec + " 초 ";
}

getClock();
setInterval(getClock, 1000);
