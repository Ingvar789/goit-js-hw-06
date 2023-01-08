let counterValue = 0;
const counter = document.getElementById("counter");
counter.querySelectorAll('button').forEach(button => {
    button.addEventListener("click", (elem) => {
        if (elem.target.dataset.action === "decrement"){
            counterValue--
        }
        else {
            ++counterValue
        }
        document.getElementById("value").textContent = counterValue;
    })
})
