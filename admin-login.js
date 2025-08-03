document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('admin-login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;

        // --- CORRECTED ADMIN CREDENTIALS ---
        // For a static site on Vercel, we will define the credentials directly here.
        // You can change these values to whatever you like.
        const ADMIN_USERNAME = 'admin';
        const ADMIN_PASSWORD = 'password123';

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            // On successful login, set a flag in sessionStorage.
            // This flag is temporary and will be cleared when the browser tab is closed.
            sessionStorage.setItem('isAdminLoggedIn', 'true');
            
            // Redirect to the main admin dashboard.
            window.location.href = 'admin.html';
        } else {
            // If credentials do not match, show an error message.
            errorMessage.style.display = 'block';
        }
    });
});
