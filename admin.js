document.addEventListener('DOMContentLoaded', () => {
    // --- Admin Authentication Check ---
    // This security check runs first. If the login flag is not set in sessionStorage,
    // it redirects the user back to the admin login page.
    if (sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
        window.location.href = 'admin-login.html';
        return; // Stop the rest of the script from executing
    }

    const userDataBody = document.getElementById('user-data-body');
    const orderDataBody = document.getElementById('order-data-body');

    /**
     * Loads all registered users from localStorage and displays them in the user table.
     */
    function displayUsers() {
        const users = JSON.parse(localStorage.getItem('urbanBloomUsers')) || [];

        if (users.length === 0) {
            userDataBody.innerHTML = '<tr><td colspan="3">No registered users found.</td></tr>';
            return;
        }

        userDataBody.innerHTML = users.map(user => `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
            </tr>
        `).join('');
    }

    /**
     * Finds all user orders stored in localStorage and displays them in the orders table.
     */
    function displayOrders() {
        let allOrders = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('urbanBloomOrders_')) {
                const userEmail = key.replace('urbanBloomOrders_', '');
                const userOrders = JSON.parse(localStorage.getItem(key)) || [];
                
                userOrders.forEach(order => {
                    allOrders.push({ ...order, userEmail });
                });
            }
        }

        if (allOrders.length === 0) {
            orderDataBody.innerHTML = '<tr><td colspan="5">No orders found.</td></tr>';
            return;
        }

        allOrders.sort((a, b) => b.numericDate - a.numericDate);

        orderDataBody.innerHTML = allOrders.map(order => `
            <tr>
                <td>#${order.id}</td>
                <td>${order.date}</td>
                <td>${order.userEmail}</td>
                <td>₹${order.total.toFixed(2)}</td>
                <td>${order.status}</td>
            </tr>
        `).join('');
    }

    // --- Initial Load ---
    displayUsers();
    displayOrders();
});
