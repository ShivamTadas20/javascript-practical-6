// Wait for DOM structural initialization before binding events
document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('authForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMsg = document.getElementById('successMsg');

    // Regex processing blueprints
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    // Core validation handler logic
    authForm.addEventListener('submit', (event) => {
        // Prevent immediate page refresh on form submission
        event.preventDefault();

        let isFormValid = true;

        // 1. Email structure evaluation
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            emailError.style.display = 'block';
            isFormValid = false;
        } else {
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            emailError.style.display = 'none';
        }

        // 2. Password complexity rule evaluation
        if (!passwordRegex.test(passwordInput.value)) {
            passwordInput.classList.add('invalid');
            passwordInput.classList.remove('valid');
            passwordError.style.display = 'block';
            isFormValid = false;
        } else {
            passwordInput.classList.remove('invalid');
            passwordInput.classList.add('valid');
            passwordError.style.display = 'none';
        }

        // 3. Final submission decision execution
        if (isFormValid) {
            successMsg.style.display = 'block';
            // Optional: Insert server dispatch code or Fetch API requests here
        } else {
            successMsg.style.display = 'none';
        }
    });

    // Instant validation removal during active user typing
    emailInput.addEventListener('input', () => {
        emailInput.classList.remove('invalid');
        emailError.style.display = 'none';
    });

    passwordInput.addEventListener('input', () => {
        passwordInput.classList.remove('invalid');
        passwordError.style.display = 'none';
    });
});
