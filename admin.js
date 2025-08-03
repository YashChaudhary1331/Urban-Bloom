document.addEventListener('DOMContentLoaded', () => {
    // --- Admin Authentication Check ---
    // This is a simple security check. If the login flag is not set in sessionStorage,
    // the user is redirected back to the admin login page.
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
        // Retrieve the list of users, or initialize an empty array if none are found.
        const users = JSON.parse(localStorage.getItem('urbanBloomUsers')) || [];

        if (users.length === 0) {
            // Display a message if no users are registered.
            userDataBody.innerHTML = '<tr><td colspan="3">No registered users found.</td></tr>';
            return;
        }

        // Generate table rows for each user and insert them into the table body.
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
        // Loop through every item in localStorage to find keys that match the order data pattern.
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('urbanBloomOrders_')) {
                const userEmail = key.replace('urbanBloomOrders_', '');
                const userOrders = JSON.parse(localStorage.getItem(key)) || [];
                
                // Add the user's email to each order object to know who placed the order.
                userOrders.forEach(order => {
                    allOrders.push({ ...order, userEmail });
                });
            }
        }

        if (allOrders.length === 0) {
            // Display a message if no orders have been placed.
            orderDataBody.innerHTML = '<tr><td colspan="5">No orders found.</td></tr>';
            return;
        }

        // Sort all orders by date, with the most recent orders appearing first.
        allOrders.sort((a, b) => b.numericDate - a.numericDate);

        // Generate table rows for each order and insert them into the table body.
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
    // Call the functions to populate the tables when the page loads.
    displayUsers();
    displayOrders();
});
