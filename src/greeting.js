const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

// console.log(form);
// console.log(input);

const USER_LOCAL_STROAGE = "currentUser";
const SHOWING_CLASS_NAME = "showing";

function saveName(text) {
  localStorage.setItem(USER_LOCAL_STROAGE, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  saveName(currentValue);
  paintGreeting(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CLASS_NAME);
  form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CLASS_NAME);
  greeting.classList.add(SHOWING_CLASS_NAME);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LOCAL_STROAGE);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
