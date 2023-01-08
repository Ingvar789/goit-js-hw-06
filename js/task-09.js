const body = document.querySelector("body");

const button = document.querySelector(".change-color");

const color = document.querySelector(".color");
console.log(color.textContent);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
});

