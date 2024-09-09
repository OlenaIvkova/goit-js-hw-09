
let formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');

    if (savedData) {
        formData = JSON.parse(savedData);
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    form.reset();
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
});

