document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const welcomeMessage = document.getElementById("welcomeMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent actual form submission
        
        const username = usernameInput.value;
        
        // **Vulnerable Code**: Inserts user input without sanitization
        welcomeMessage.innerHTML = `<h2>Welcome, ${username}</h2>`;
    });
});
