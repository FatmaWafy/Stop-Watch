let Time = document.querySelector("#time");
let Timer = null;
let [Seconds, Minutes, Hours] = [0, 0, 0];

function StopWatch() {
  Seconds++;

  if (Seconds == 60) {
    Seconds = 0;
    Minutes++;
    if (Minutes == 60) {
      Minutes = 0;
      Hours++;
    }
  }

  let h = Hours < 10 ? `0${Hours}` : Hours;
  let m = Minutes < 10 ? `0${Minutes}` : Minutes;
  let s = Seconds < 10 ? `0${Seconds}` : Seconds;

  Time.innerHTML = `${h}:${m}:${s}`;
}

function Start() {
  if (Timer !== null) {
    clearInterval(Timer);
  }
  Timer = setInterval(StopWatch, 1000);
}

function Stop() {
  clearInterval(Timer);
}

function Reset() {
  clearInterval(Timer);
  Timer = setInterval(StopWatch, 1000);
  [Seconds, Minutes, Hours] = [0, 0, 0];
  Time.innerHTML = "00:00:00";
}
