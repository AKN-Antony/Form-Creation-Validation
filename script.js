document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get input values and trim whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Reset feedback
        feedbackDiv.className = '';
        feedbackDiv.textContent = '';
        
        // Validate inputs
        const errors = [];
        
        // Username validation
        if (username.length < 3) {
            errors.push('Username must be at least 3 characters');
        }
        
        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.push('Please enter a valid email address');
        }
        
        // Password validation
        if (password.length < 8) {
            errors.push('Password must be at least 8 characters');
        }
        
        // Display feedback
        if (errors.length > 0) {
            feedbackDiv.className = 'error';
            feedbackDiv.innerHTML = errors.join('<br>');
        } else {
            feedbackDiv.className = 'success';
            feedbackDiv.textContent = 'Registration successful!';
            
            // In a real app, you would submit the form here
            // form.submit();
            
            // For demo purposes, clear the form
            form.reset();
        }
    });
});