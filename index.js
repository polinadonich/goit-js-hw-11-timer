const dayRef = document.querySelector('span[data-value="days"]');
const hourRef = document.querySelector('span[data-value="hours"]');
const minRef = document.querySelector('span[data-value="mins"]');
const secRef = document.querySelector('span[data-value="secs"]');

const targetDate = new Date("September 20, 2021  12:00:00");

const toTargetDate = setInterval(() => {
  const dateNow = new Date();
  const remainingTime = targetDate - dateNow;
  countdown(remainingTime);
}, 1000);

function countdown(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  dayRef.textContent = days;
  hourRef.textContent = hours;
  minRef.textContent = mins;
  secRef.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
