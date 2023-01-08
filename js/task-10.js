function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxContainer = document.getElementById("boxes");
const controls = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = [];
let quantity = 0;
controls.addEventListener('input', (e) => {
  quantity = e.currentTarget.value;
});

createBtn.addEventListener('click', () => {
  createBoxes(quantity);
});

function createBoxes(amount) {
   for (let box of boxes) {
    box.remove();
  }
  for (let i = 0; i < amount; i++) {
    boxes.push(document.createElement('div'));
    boxContainer.append(boxes[i]);
    boxes[i].style.backgroundColor = getRandomHexColor();
    boxes[i].style.width = `${i*10+30}px`
    boxes[i].style.height = `${i*10+30}px`
    boxes[i].style.marginTop = "30px"
  }
  return
}

destroyBtn.addEventListener('click', () => {
  for (let box of boxes) {
    box.remove();
  }
})


