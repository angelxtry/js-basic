const body = document.querySelector('body');

const IMAGE_COUNT = 3;

function genRandomNumber() {
  const randomNumber = Math.floor(Math.random() * IMAGE_COUNT) + 1;
  return randomNumber;
}

function handleImageLoad() {
  console.log('finished loading.');
}

function paintImage(imageNumber) {
  const image = new Image();
  image.src = `images/${imageNumber}.jpg`;
  image.classList.add('bg-image');
  body.appendChild(image);
  image.addEventListener('loadend', handleImageLoad);
}

function init() {
  const randomNumber = genRandomNumber();
  paintImage(randomNumber);
}

init();
