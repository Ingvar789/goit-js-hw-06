const body = document.querySelector("body");

const button = document.querySelector(".change-color");

const color = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener('click', () => {
  let hex = getRandomHexColor();
  body.style.backgroundColor = hex;
  color.textContent = hex;
});

