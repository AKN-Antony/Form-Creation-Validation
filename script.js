document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get input values and trim whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Reset all error states
        document.getElementById('username').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('password').classList.remove('error');
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        feedbackDiv.className = '';
        feedbackDiv.textContent = '';
        
        // Validate inputs
        let isValid = true;
        const messages = [];
        
        // Username validation
        if (username.length < 3) {
            isValid = false;
            document.getElementById('username').classList.add('error');
            usernameError.textContent = 'Username must be at least 3 characters';
            messages.push('Username is too short');
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            document.getElementById('email').classList.add('error');
            emailError.textContent = 'Please enter a valid email address';
            messages.push('Invalid email format');
        }
        
        // Password validation
        if (password.length < 8) {
            isValid = false;
            document.getElementById('password').classList.add('error');
            passwordError.textContent = 'Password must be at least 8 characters';
            messages.push('Password is too short');
        }
        
        // Show feedback
        feedbackDiv.style.display = 'block';
        
        if (isValid) {
            feedbackDiv.className = 'success';
            feedbackDiv.textContent = 'Registration successful!';
            form.reset();
        } else {
            feedbackDiv.className = 'error';
            feedbackDiv.innerHTML = 'Please fix the following errors:<br>' + messages.join('<br>');
        }
    });
});