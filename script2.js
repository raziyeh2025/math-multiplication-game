const timer = document.getElementById("timer");
const counter = document.getElementById("counter");
const start = document.getElementById("start");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const next = document.getElementById("next");
const answer = document.getElementById("answer");
const correct_lbl = document.getElementById("correct");
const input = document.getElementById("input");
const mean_time = document.getElementById("mean-time");
const div_main = document.getElementById("main");
var time = 0;
var num_count = -1;
var n1, n2;
var correct = 0;
start.addEventListener("click", () => {
  if (start.textContent == "Start") start.textContent = "Pause";
  else start.textContent = "Start";
  if (number1.textContent == "?") NewProblem();
});
answer.addEventListener("click", () => {
  input.value = number1.textContent * number2.textContent;
});
next.addEventListener("click", () => {
  if (start.textContent == "Start") return;
  NewProblem();
});
setInterval(() => {
  if (start.textContent == "Pause") time++;
  const min = Math.floor(time / 60 < 10)
    ? "0" + Math.floor(time / 60)
    : Math.floor(time / 60);
  const sec = time % 60 < 10 ? "0" + (time % 60) : time % 60;
  if (num_count > 0)
    mean_time.textContent = "Mean: " + Math.floor(time / num_count) + "s";

  timer.textContent = `Timer: ${min}:${sec}`;
}, 1000);

function NewProblem() {
  if (num_count == 9) {
    start.click();
    var best = localStorage.getItem("best")
      ? localStorage.getItem("best")
      : 100000;
    if (best > time) {
      best = time;
      localStorage.setItem("best", best);
      localStorage.setItem("bestPlayer", localStorage.getItem("player"));
    }
    const bestPlayer = localStorage.getItem("bestPlayer")
      ? localStorage.getItem("bestPlayer")
      : "-";
    div_main.innerHTML = `<div style="margin-top: 10px;text-align: center;">
            <h1>Game Over</h1>
            <h1>Your Time is : ${time}</h1>
            <h1>Best Time is :${best}s by ${bestPlayer}</h1>
            <a id="easy" class="main_btn"  href="math.html">Retry</a>
           
        </div>`;
  }

  input.value = "";
  num_count++;
  const level = localStorage.getItem("math_level");
  var max = 10;
  if (level == "medium") max = 100;
  else if (level == "hard") max = 1000;

  n1 = Math.floor((Math.random() * max) % max);
  number1.textContent = n1;
  n2 = Math.floor((Math.random() * max) % max);
  number2.textContent = n2;
  counter.textContent = "counter: " + num_count;
}
function KeyDown(e) {
  input.style.color = "black";
  if (e.textContent == "←") {
    input.value = input.value.substr(0, input.value.length - 1);
    CheckAnswer();
    return;
  }

  input.value = Number(input.value + e.textContent);

  CheckAnswer();
}
function CheckAnswer() {
  const res = n1 * n2;
  if (res == Number(input.value)) {
    next.click();
    correct++;
    correct_lbl.textContent = "correct : " + correct;
  } else if ((res + "").length <= input.value.length) input.style.color = "red";
}
