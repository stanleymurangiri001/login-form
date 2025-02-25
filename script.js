// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const usernameInput = form.querySelector('input[type="text"]');
    const passwordInput = form.querySelector('input[type="password"]');
    
    form.addEventListener('submit', function (e) {
        // Clear previous errors
        const errorMessages = document.querySelectorAll('.error');
        errorMessages.forEach(function (message) {
            message.remove();
        });

        let valid = true;

        // Validate Username
        if (usernameInput.value.trim() === "") {
            valid = false;
            const usernameError = document.createElement('span');
            usernameError.classList.add('error');
            usernameError.textContent = "Username is required";
            usernameInput.insertAdjacentElement('afterend', usernameError);
        }

        // Validate Password
        if (passwordInput.value.trim() === "") {
            valid = false;
            const passwordError = document.createElement('span');
            passwordError.classList.add('error');
            passwordError.textContent = "Password is required";
            passwordInput.insertAdjacentElement('afterend', passwordError);
        } else if (passwordInput.value.length < 6 || passwordInput.value.length > 8) {
            valid = false;
            const passwordLengthError = document.createElement('span');
            passwordLengthError.classList.add('error');
            passwordLengthError.textContent = "Password must be between 6 and 8 characters";
            passwordInput.insertAdjacentElement('afterend', passwordLengthError);
        }

        if (!valid) {
            e.preventDefault(); // Prevent form submission
        }
    });
});
