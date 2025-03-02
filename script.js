const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let timer;
startBtn.addEventListener("click", () => {
  timer = setInterval(timerHandler, 1000);
});
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
});


function timerHandler() {
  let seconds = Number(sec.innerHTML) + 1;
  sec.innerHTML = seconds;
  if (sec.innerHTML == 60) {
    let minuts = Number(min.innerHTML) + 1;
    min.innerHTML = String(minuts).padStart(2, "0");
    sec.innerHTML = '00';
} 
else {
  sec.innerHTML = String(seconds).padStart(2, "0");
}
 if (min.innerHTML == 60) {
    let hours = Number(hr.innerHTML) + 1;
    hr.innerHTML = String(hours).padStart(2, "0");
    min.innerHTML = '00';
    sec.innerHTML = '00';
}
}

resetBtn.addEventListener('click', ()=>{
    clearInterval(timer);
    hr.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';
})