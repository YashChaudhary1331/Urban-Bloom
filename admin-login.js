document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('admin-login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const usernameInput = document.getElementById('admin-username').value;
        const passwordInput = document.getElementById('admin-password').value;

        // Read the secure credentials from Vercel's Environment Variables
        const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
        const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

        if (usernameInput === ADMIN_USERNAME && passwordInput === ADMIN_PASSWORD) {
            // On successful login, set a flag in sessionStorage
            sessionStorage.setItem('isAdminLoggedIn', 'true');
            
            // Redirect to the main admin dashboard
            window.location.href = 'admin.html';
        } else {
            // If credentials do not match, show an error message
            errorMessage.style.display = 'block';
        }
    });
});