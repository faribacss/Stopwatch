const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let timer;
startBtn.addEventListener("click", () => {
  timer = setInterval(timerHandler, 1000);
  if (timer) {
    startBtn.disabled = true;
    startBtn.style.backgroundColor = "#032107";
    stopBtn.style.backgroundColor = '#EB6548';
  }
});
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  stopBtn.style.backgroundColor = "#6a180a";
    timer = null;
    startBtn.disabled = false;
    startBtn.style.backgroundColor = "#589d62";
  
});

function timerHandler() {
  let seconds = Number(sec.innerHTML) + 1;
  sec.innerHTML = seconds;
  if (sec.innerHTML == 60) {
    let minuts = Number(min.innerHTML) + 1;
    min.innerHTML = String(minuts).padStart(2, "0");
    sec.innerHTML = "00";
  } else {
    sec.innerHTML = String(seconds).padStart(2, "0");
  }
  if (min.innerHTML == 60) {
    let hours = Number(hr.innerHTML) + 1;
    hr.innerHTML = String(hours).padStart(2, "0");
    min.innerHTML = "00";
    sec.innerHTML = "00";
  }
  if (hr.innerHTML == 24) {
    hr.innerHTML = "00";
  }
}

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  hr.innerHTML = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
  stopBtn.style.backgroundColor = "#EB6548";
  startBtn.style.backgroundColor = "#589d62";
});
