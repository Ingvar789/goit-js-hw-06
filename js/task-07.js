const range = document.querySelector("input");
const span = document.querySelector('span');

range.addEventListener('input', (e) => {
    span.style.fontSize = `${e.currentTarget.value}px`;
    console.log(e.currentTarget.value);
})