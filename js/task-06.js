const form = document.querySelector("input");

form.addEventListener('blur', (e) => {
    if (e.currentTarget.value.length == form.dataset.length) {
        form.classList.add("valid");
        form.classList.remove("invalid");
    }
    else {
        form.classList.add("invalid");
        form.classList.remove("valid");
    }
});