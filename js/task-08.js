const form = document.querySelector(".login-form");
const data = {
    email: '',
    password: ''
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('All fields are required!');
    }

    data.email = email.value;
    data.password = password.value;
    console.log(data);
    e.currentTarget.reset();
});