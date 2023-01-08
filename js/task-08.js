const form = document.querySelector(".login-form");
console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('All fields are required!');
    }

    console.log(`Email: ${email.value}, Password: ${password.value}.`);
    e.currentTarget.reset();
});