let hour = document.querySelector(".hour")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")

let start = document.querySelector(".start")
let pause = document.querySelector(".stop")
let ret = document.querySelector(".return")

let valueBox = document.querySelector(".valueBox")

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval;

function time() {

  seconds++;

  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes == 60) {
    hours++;
    minutes = 0;
  }

  // ===============================

  sec.innerHTML = `0${seconds}`
  if (seconds > 9) {
    sec.innerHTML = seconds
  }

  min.innerHTML = `0${minutes}`
  if (minutes > 9) {
    min.innerHTML = minutes
  }

  hour.innerHTML = `0${hours}`
  if (hours > 9) {
    hour.innerHTML = hours
  }
}

start.addEventListener("click", () => {
  interval = setInterval(time, 1000); 
}, {once : true})

pause.onclick = () => {
  clearInterval(interval);
}

ret.onclick = () => {
  let value = document.createElement("div")
  value.classList.add("value")
  valueBox.appendChild(value)

  value.innerHTML = `${hour.innerHTML}:${min.innerHTML}:${sec.innerHTML}`

  clearInterval(interval);

  sec.innerHTML = "00"
  min.innerHTML = "00"
  hour.innerHTML = "00"

  seconds = 0;
  minutes = 0;
  hours = 0;

  interval = setInterval(time, 1000)
}