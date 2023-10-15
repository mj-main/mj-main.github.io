const clock = document.querySelector("div#clock");

function getClock() {
  const date = new Date();
  const day = date.toLocaleDateString("ko-kr", { weekday: "short" });
  const fullYear = String(date.getFullYear()).slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dayOfMonth = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${month}.${dayOfMonth}(${day}) ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
