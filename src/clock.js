const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('.js-clock-title');

// console.log({ clockContainer });
// console.log({ clockTitle });

function formatNumber(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = formatNumber(date.getMinutes());
  const seconds = formatNumber(date.getSeconds());
  clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
