document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const products = [
        { id: 'p1', name: 'Monstera Deliciosa', price: 2900, imageUrl:'Monstera Deliciosa.jpeg' , categories: ['beginner'], rating: 4.8, reviewCount: 28, description: 'Known for its iconic split leaves, the Monstera is a fast-growing, easy-care plant that adds a touch of the tropics to any room.', care: 'Loves bright, indirect light. Water when the top 2 inches of soil are dry.', badge: 'New Arrival' },
        { id: 'p2', name: 'Snake Plant', price: 2100, imageUrl: 'snake pplant.jpeg', categories: ['beginner', 'low-light', 'pet-friendly'], rating: 4.9, reviewCount: 42, description: 'Almost impossible to kill, the Snake Plant is the perfect choice for beginners. Its stiff, upright leaves are a statement in modern design.', care: 'Thrives on neglect. Tolerates low light and infrequent watering. Let soil dry out completely.', badge: 'On Sale' },
        { id: 'p3', name: 'Fiddle Leaf Fig', price: 4600, imageUrl: 'Fiddle Leaf Fig.jpeg', categories: [], rating: 4.5, reviewCount: 19, description: 'A designer favorite, the Fiddle Leaf Fig boasts large, violin-shaped leaves. It\'s a statement piece that requires consistent care.', care: 'Needs bright, consistent, indirect light. Water when the top inch of soil is dry. Avoid drafts.' },
        { id: 'p4', name: 'Golden Pothos', price: 1650, imageUrl: 'Golden Pothos.jpeg', categories: ['beginner', 'low-light'], rating: 4.7, reviewCount: 35, description: 'With its trailing heart-shaped leaves, the Pothos is perfect for hanging baskets or shelves. It\'s incredibly resilient and a great air purifier.', care: 'Very adaptable. Can tolerate low light but prefers bright, indirect light. Water when soil is dry.' },
        { id: 'p5', name: 'ZZ Plant', price: 2500, imageUrl: 'ZZ Plant.jpeg', categories: ['beginner', 'low-light'], rating: 4.9, reviewCount: 38, description: 'The Zamioculcas Zamiifolia, or ZZ Plant, is a drought-tolerant hero with wide, dark green leaves. It shines in any light condition.', care: 'Extremely low maintenance. Prefers to be dry. Water only when soil is completely dry to the touch.' },
        { id: 'p6', name: 'Spider Plant', price: 1500, imageUrl: 'Spider Plant.jpeg', categories: ['beginner', 'pet-friendly'], rating: 4.6, reviewCount: 31, description: 'Famous for its arching leaves and baby "spiderettes," this plant is fun, easy to grow, and a powerful air purifier.', care: 'Prefers bright, indirect light but tolerates lower light. Keep soil evenly moist.' },
        { id: 'p7', name: 'Calathea Orbifolia', price: 3300, imageUrl: 'Calathea Orbifolia.jpeg', categories: ['pet-friendly'], rating: 4.4, reviewCount: 15, description: 'A showstopper with large, round leaves striped with silver. Calatheas are known for folding their leaves up at night.', care: 'Needs high humidity and consistently moist soil. Prefers indirect light. Use filtered water.' },
        { id: 'p8', name: 'Bird of Paradise', price: 5400, imageUrl: 'Bird of Paradise plant.jpeg', categories: [], rating: 4.7, reviewCount: 22, description: 'Bring a dramatic, tropical vibe indoors with the Bird of Paradise. Its large, banana-like leaves can grow to impressive heights.', care: 'Loves bright light, including some direct sun. Water generously during the growing season.' },
        { id: 'p9', name: 'String of Pearls', price: 1800, imageUrl: 'String of Pearls plant.jpeg', categories: [], rating: 4.3, reviewCount: 18, description: 'A unique trailing succulent with pea-shaped leaves. Perfect for hanging planters where its "pearls" can cascade down.', care: 'Needs bright, indirect light and well-draining soil. Water sparingly, allowing soil to dry out.' },
        { id: 'p10', name: 'Rubber Plant', price: 3750, imageUrl: 'Rubber Plant.jpeg', categories: ['beginner'], rating: 4.6, reviewCount: 25, description: 'With its striking, glossy leaves, the Rubber Plant is a classic houseplant that\'s easy to care for and makes a bold statement.', care: 'Prefers bright, indirect light. Water when the top inch of soil is dry. Wipe leaves to keep them shiny.' },
        { id: 'p11', name: 'Peace Lily', price: 2300, imageUrl: 'Peace Lily.jpeg', categories: ['low-light', 'beginner'], rating: 4.7, reviewCount: 33, description: 'Elegant and graceful, the Peace Lily is known for its beautiful white spathes and ability to thrive in lower light conditions.', care: 'Tolerates low light. Water when the plant starts to droop slightly; it will tell you when it\'s thirsty!' },
        { id: 'p12', name: 'Aloe Vera', price: 1250, imageUrl: 'Aloe Vera.jpeg', categories: ['beginner'], rating: 4.8, reviewCount: 40, description: 'A must-have succulent known for its medicinal properties. Its spiky, fleshy leaves are both beautiful and useful.', care: 'Loves bright, direct light. Water deeply but infrequently, allowing the soil to dry out completely.' },
        { id: 'p13', name: 'Jade Plant', price: 2000, imageUrl: 'Jade Plant.jpeg', categories: ['beginner'], rating: 4.6, reviewCount: 29, description: 'A popular succulent believed to bring good luck. The Jade Plant has thick, woody stems and glossy, oval-shaped leaves.', care: 'Needs plenty of direct sunlight. Water when the soil is dry to the touch. Avoid overwatering.' },
        { id: 'p14', name: 'Boston Fern', price: 2150, imageUrl: 'Boston Fern.jpeg', categories: ['pet-friendly'], rating: 4.4, reviewCount: 17, description: 'With its lush, feathery fronds, the Boston Fern is a classic choice for adding a touch of green elegance and humidity to a room.', care: 'Loves high humidity and bright, indirect light. Keep the soil consistently moist but not waterlogged.' },
        { id: 'p15', name: 'Money Tree', price: 4150, imageUrl: 'Money plant.jpeg', categories: ['beginner', 'pet-friendly'], rating: 4.7, reviewCount: 26, description: 'Often with a braided trunk, the Money Tree is another plant thought to bring good fortune. It\'s easy to care for and grows quickly.', care: 'Prefers bright, indirect light. Water thoroughly when the top 1-2 inches of soil are dry.' },
        { id: 'p16', name: 'Pilea Peperomioides', price: 2400, imageUrl: 'Pilea Peperomioides.jpeg', categories: ['pet-friendly'], rating: 4.8, reviewCount: 30, description: 'Also known as the Chinese Money Plant, its unique, coin-shaped leaves make it a modern and cheerful addition to any collection.', care: 'Prefers bright, indirect light. Rotate it regularly to keep it from growing lopsided. Water when dry.' },
        { id: 'p17', name: 'Aglaonema', price: 2650, imageUrl: 'Aglaonema.jpeg', categories: ['low-light', 'beginner'], rating: 4.6, reviewCount: 21, description: 'The Chinese Evergreen is one of the most durable houseplants, known for its stunning variegated leaves in shades of green, silver, and red.', care: 'Tolerates low light very well. Water when the top 2 inches of soil feel dry.' },
        { id: 'p18', name: 'Dracaena Marginata', price: 3150, imageUrl: 'Dracaena Marginata.jpeg', categories: [], rating: 4.5, reviewCount: 16, description: 'A spiky, tree-like plant with slender, arching leaves edged in red. It\'s a great choice for adding height and drama.', care: 'Prefers medium to bright indirect light. Water when the top half of the soil is dry.' },
        { id: 'p19', name: 'Hoya Carnosa', price: 2250, imageUrl: 'Hoya Carnosa.jpeg', categories: ['pet-friendly'], rating: 4.7, reviewCount: 23, description: 'The Wax Plant is a beautiful trailing plant with thick, waxy leaves and, if you\'re lucky, clusters of fragrant, star-shaped flowers.', care: 'Loves bright, indirect light. Allow soil to dry out between waterings. It enjoys being slightly root-bound.' },
        { id: 'p20', name: 'Alocasia Polly', price: 3500, imageUrl: 'Alocasia Polly.jpeg', categories: [], rating: 4.3, reviewCount: 14, description: 'With its dramatic, arrow-shaped, dark green leaves and prominent silver veins, the Alocasia Polly is a true showpiece.', care: 'Needs bright, indirect light and high humidity. Keep soil consistently moist but not soggy.' },
        { id: 'p21', name: 'Orchid', price: 3200, imageUrl: 'Orchid.jpeg', categories: [], rating: 4.6, reviewCount: 20, description: 'A symbol of elegance and beauty, orchids bring a sophisticated touch with their long-lasting, exotic blooms.', care: 'Requires bright, indirect light and specific orchid potting mix. Water thoroughly once the medium is dry.' },
        { id: 'p22', name: 'Anthurium', price: 2800, imageUrl: 'Anthurium.jpeg', categories: [], rating: 4.5, reviewCount: 18, description: 'Known for its bright, heart-shaped spathes in red, pink, or white, the Anthurium provides a continuous splash of color.', care: 'Thrives in bright, indirect light. Water when the top inch of soil is dry. Loves humidity.' },
        { id: 'p23', name: 'Croton', price: 2600, imageUrl: 'Croton.jpeg', categories: [], rating: 4.4, reviewCount: 15, description: 'A vibrant plant that adds a riot of color with its multi-colored leaves in shades of yellow, red, orange, and green.', care: 'Needs lots of bright, direct light to maintain its colors. Keep soil evenly moist.' },
        { id: 'p24', name: 'Caladium', price: 2900, imageUrl: 'Caladium.jpeg', categories: [], rating: 4.3, reviewCount: 12, description: 'With paper-thin, heart-shaped leaves in stunning combinations of pink, white, and green, Caladiums are true works of art.', care: 'Prefers bright, indirect light and high humidity. Keep soil consistently moist.' },
        { id: 'p25', name: 'Syngonium', price: 1800, imageUrl: 'Syngonium.jpeg', categories: ['beginner', 'low-light'], rating: 4.6, reviewCount: 24, description: 'The Arrowhead Plant is a fast-growing, easy-care plant with arrow-shaped leaves. It can be kept bushy or allowed to trail.', care: 'Adaptable to various light conditions but prefers bright, indirect light. Water when the top inch of soil is dry.' },
        { id: 'p26', name: 'Maranta', price: 2400, imageUrl: 'Maranta.jpeg', categories: ['pet-friendly', 'low-light'], rating: 4.5, reviewCount: 19, description: 'The Prayer Plant is fascinating to watch as its leaves fold up at night. It features beautiful, patterned foliage.', care: 'Prefers bright, indirect light and high humidity. Keep soil consistently moist with filtered water.' },
        { id: 'p27', name: 'Philodendron', price: 2200, imageUrl: 'Philodendron.jpeg', categories: ['beginner'], rating: 4.7, reviewCount: 32, description: 'A classic and popular houseplant with heart-shaped leaves. It\'s a vigorous vine that is very easy to grow.', care: 'Prefers medium to bright indirect light. Water when the top half of the soil is dry.' },
        { id: 'p28', name: 'Begonia', price: 2700, imageUrl: 'Begonia.jpeg', categories: [], rating: 4.4, reviewCount: 16, description: 'Begonias are prized for their stunningly patterned and uniquely shaped leaves, and some varieties also produce beautiful flowers.', care: 'Prefers bright, indirect light and moderate humidity. Allow the top inch of soil to dry before watering.' },
        { id: 'p29', name: 'Fittonia', price: 1600, imageUrl: 'Fittonia.jpeg', categories: ['pet-friendly'], rating: 4.3, reviewCount: 14, description: 'The Nerve Plant has striking leaves with brightly colored veins in pink, white, or red. It loves high humidity.', care: 'Prefers low to medium indirect light and high humidity. Keep soil consistently moist. Great for terrariums.' },
        { id: 'p30', name: 'Peperomia', price: 1900, imageUrl: 'Peperomia.jpeg', categories: ['pet-friendly', 'beginner'], rating: 4.6, reviewCount: 22, description: 'A diverse group of small, easy-care plants with interesting foliage. The Watermelon Peperomia is a popular variety.', care: 'Prefers medium to bright indirect light. Allow the soil to dry out between waterings.' },
        { id: 'p31', name: 'Dieffenbachia', price: 3100, imageUrl: 'Dieffenbachia.jpeg', categories: [], rating: 4.5, reviewCount: 17, description: 'Also known as Dumb Cane, this plant has large, lush leaves with variegation in shades of cream, yellow, and green.', care: 'Prefers bright, indirect light. Keep soil evenly moist but not waterlogged. Keep away from pets.' },
        { id: 'p32', name: 'Schefflera', price: 3400, imageUrl: 'Schefflera.jpeg', categories: [], rating: 4.4, reviewCount: 15, description: 'The Umbrella Tree has glossy, oval leaves that grow in a circular pattern, resembling an umbrella. It\'s a hardy and fast-growing plant.', care: 'Prefers bright, indirect light. Water thoroughly when the top of the soil is dry.' },
        { id: 'p33', name: 'Yucca', price: 4800, imageUrl: 'Yucca.jpeg', categories: [], rating: 4.6, reviewCount: 19, description: 'A bold, architectural plant with sword-like leaves that grow from a thick, woody cane. It brings a desert vibe indoors.', care: 'Loves bright light and can handle some direct sun. Allow soil to dry out completely between waterings.' },
        { id: 'p34', name: 'Areca Palm', price: 4200, imageUrl: 'Areca Palm.jpeg', categories: ['pet-friendly'], rating: 4.7, reviewCount: 25, description: 'One of the most popular indoor palms, the Areca Palm has graceful, feathery fronds and is an excellent air purifier.', care: 'Prefers bright, indirect light. Keep soil lightly moist but not soggy. Loves humidity.' },
        { id: 'p35', name: 'Kentia Palm', price: 5800, imageUrl: 'Kentia Palm.jpeg', categories: ['pet-friendly', 'low-light'], rating: 4.8, reviewCount: 21, description: 'An elegant and resilient palm that can tolerate lower light conditions than most. It has a classic, tropical look.', care: 'Tolerates low light but prefers bright, indirect light. Water when the top 2 inches of soil are dry.' },
        { id: 'p36', name: 'Parlor Palm', price: 3900, imageUrl: 'Parlor Palm.jpeg', categories: ['pet-friendly', 'low-light', 'beginner'], rating: 4.7, reviewCount: 28, description: 'A classic, low-maintenance palm that has been popular for decades. It adapts well to indoor conditions.', care: 'Tolerates low light. Water when the top inch of soil is dry. Avoid overwatering.' },
        { id: 'p37', name: 'Ponytail Palm', price: 4500, imageUrl: 'Ponytail Palm.jpeg', categories: ['beginner'], rating: 4.6, reviewCount: 18, description: 'Not a true palm, this succulent has a swollen trunk that stores water and long, curly leaves that resemble a ponytail.', care: 'Loves bright light. Allow soil to dry out almost completely between waterings.' },
        { id: 'p38', name: 'Sago Palm', price: 5200, imageUrl: 'Sago Palm.jpeg', categories: [], rating: 4.5, reviewCount: 14, description: 'A slow-growing cycad with stiff, feathery fronds. It adds a prehistoric, dramatic look to any space. Toxic to pets.', care: 'Prefers bright, indirect light. Water when the soil is dry to the touch. Be careful not to overwater.' },
        { id: 'p39', name: 'Majesty Palm', price: 5500, imageUrl: 'Majesty Palm.jpeg', categories: [], rating: 4.3, reviewCount: 12, description: 'A beautiful palm with graceful, arching fronds. It requires a bit more care, especially with humidity.', care: 'Needs bright, indirect light and consistently moist soil. Loves high humidity.' },
        { id: 'p40', name: 'Bamboo Palm', price: 4900, imageUrl: 'Bamboo Palm.jpeg', categories: ['pet-friendly', 'low-light'], rating: 4.6, reviewCount: 20, description: 'With its bamboo-like canes and lush fronds, this palm is an excellent air purifier and adds a touch of the tropics.', care: 'Tolerates low light. Keep soil evenly moist. Appreciates high humidity.' },
        { id: 'p41', name: 'Air Plant', price: 900, imageUrl: 'Air Plant.jpeg', categories: ['pet-friendly', 'beginner'], rating: 4.8, reviewCount: 35, description: 'Tillandsias, or Air Plants, don\'t need soil to grow. They can be placed in terrariums, on driftwood, or in special holders.', care: 'Needs bright, indirect light. Soak in water for 20-30 minutes once a week, then let dry completely.' },
        { id: 'p42', name: 'Bromeliad', price: 2800, imageUrl: 'Bromeliad.jpeg', categories: ['pet-friendly'], rating: 4.5, reviewCount: 19, description: 'Known for their colorful, long-lasting flower bracts, Bromeliads are easy-care tropical plants.', care: 'Prefers bright, indirect light. Keep the central "cup" of the plant filled with water.' },
        { id: 'p43', name: 'Cactus', price: 1200, imageUrl: 'Cactus.jpeg', categories: ['beginner'], rating: 4.7, reviewCount: 30, description: 'A diverse group of succulents known for their unique shapes and low water needs. Perfect for sunny windowsills.', care: 'Needs a lot of direct sunlight. Water very sparingly, allowing the soil to dry out completely.' },
        { id: 'p44', name: 'Succulent', price: 800, imageUrl: 'Succulent.jpeg', categories: ['beginner'], rating: 4.8, reviewCount: 40, description: 'Small, charming, and easy to care for, succulents come in a vast array of colors and shapes.', care: 'Needs bright, direct light. Water only when the soil is completely dry.' },
        { id: 'p45', name: 'Kalanchoe', price: 1400, imageUrl: 'Kalanchoe.jpeg', categories: [], rating: 4.4, reviewCount: 18, description: 'A cheerful succulent that produces clusters of small, colorful flowers that last for weeks.', care: 'Prefers bright, indirect light. Allow soil to dry out between waterings.' },
        { id: 'p46', name: 'Crown of Thorns', price: 1800, imageUrl: 'Crown of Thorns.jpeg', categories: [], rating: 4.3, reviewCount: 15, description: 'A woody, thorny succulent that can bloom almost year-round with small, colorful flowers.', care: 'Needs bright, direct light to flower well. Water when the top inch of soil is dry.' },
        { id: 'p47', name: 'African Violet', price: 1600, imageUrl: 'African Violet.jpeg', categories: ['pet-friendly'], rating: 4.5, reviewCount: 22, description: 'A classic flowering houseplant with fuzzy leaves and delicate flowers in shades of purple, pink, and white.', care: 'Prefers bright, indirect light. Water from the bottom to avoid getting the leaves wet. Keep soil moist.' },
        { id: 'p48', name: 'Cyclamen', price: 2200, imageUrl: 'Cyclamen.jpeg', categories: [], rating: 4.4, reviewCount: 16, description: 'Known for its upswept petals and beautifully patterned leaves, Cyclamen is a popular cool-season bloomer.', care: 'Prefers bright, indirect light and cool temperatures. Water when the soil feels dry, avoiding the crown.' },
        { id: 'p49', name: 'Gloxinia', price: 2400, imageUrl: 'Gloxinia.jpeg', categories: [], rating: 4.3, reviewCount: 13, description: 'With large, velvety, bell-shaped flowers in vibrant colors, Gloxinia is a stunning flowering plant.', care: 'Prefers bright, indirect light. Keep soil evenly moist while in bloom. Avoid getting water on the leaves.' },
        { id: 'p50', name: 'Poinsettia', price: 2600, imageUrl: 'Poinsettia.jpeg', categories: [], rating: 4.2, reviewCount: 11, description: 'A holiday favorite, the Poinsettia\'s colorful bracts (modified leaves) are often mistaken for flowers.', care: 'Prefers bright, indirect light. Water when the soil feels dry to the touch.' },
        { id: 'p51', name: 'Amaryllis', price: 2800, imageUrl: 'Amaryllis.jpeg', categories: [], rating: 4.6, reviewCount: 19, description: 'Known for its huge, trumpet-shaped flowers on tall stalks, Amaryllis is a spectacular bloomer, often grown from a bulb.', care: 'Prefers bright, indirect light. Water sparingly until growth begins, then keep soil moist.' },
    ];

    
    let cart = JSON.parse(localStorage.getItem('urbanBloomCart')) || {};
    let selectedPaymentMethod = null;
    let userReviews = JSON.parse(localStorage.getItem('urbanBloomReviews')) || {};
    let currentUser = JSON.parse(sessionStorage.getItem('urbanBloomUser')) || null;
    let wishlist = (currentUser && JSON.parse(localStorage.getItem(`urbanBloomWishlist_${currentUser.email}`))) || [];

    let appliedCoupon = JSON.parse(sessionStorage.getItem('urbanBloomCoupon')) || null;

    const coupons = {
        "SAVE15": { type: 'percent', value: 0.15 },
        "FREESHIP": { type: 'shipping', value: 0 }
    };
    // --- SELECTORS ---
    const newArrivalsGrid = document.getElementById('new-arrivals-grid');
    const bestSellersGrid = document.getElementById('best-sellers-grid');
    const shopProductGrid = document.getElementById('shop-products');
    const cartButton = document.querySelector('.cart-button');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCartBtn = document.querySelector('.close-cart-btn');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartItemCountEl = document.querySelector('.cart-item-count');
    const cartTotalPriceEl = document.getElementById('cart-total-price');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const modalCloseIcons = document.querySelectorAll('.modal-close-icon');
    const clearCartBtn = document.querySelector('.clear-cart-btn');
    const contactForm = document.getElementById('contact-form');
    const summaryItemsContainer = document.getElementById('summary-items');
    const summaryShippingEl = document.getElementById('summary-shipping');
    const summaryTotalPriceEl = document.getElementById('summary-total-price');
    const paymentOptions = document.querySelectorAll('.payment-option');
    const placeOrderBtn = document.getElementById('place-order-btn');
    const shippingForm = document.getElementById('shipping-form');
    const searchBar = document.getElementById('search-bar');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sort-select');
    const userNav = document.querySelector('.user-nav');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const navLinksContainer = document.querySelector('.nav-links');
    const wishlistGrid = document.getElementById('wishlist-grid');
    const accountHeader = document.getElementById('account-header');
    const savedAddressForm = document.getElementById('saved-address-form');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    // --- FUNCTIONS ---
    function renderMyPlants() {
        const myPlantsGrid = document.getElementById('my-plants-grid');
        if (!myPlantsGrid || !currentUser) return;

        const purchasedKey = `urbanBloomPurchased_${currentUser.email}`;
        const purchasedIds = JSON.parse(localStorage.getItem(purchasedKey)) || [];

        if (purchasedIds.length === 0) {
            myPlantsGrid.innerHTML = `<p>You haven't purchased any plants yet. Your collection will appear here once you do!</p>`;
            return;
        }

        const purchasedProducts = products.filter(p => purchasedIds.includes(p.id));
        renderProducts(purchasedProducts, myPlantsGrid);
    }

    function renderOrderHistory() {
        const orderHistoryBody = document.getElementById('order-history-body');
        if (!orderHistoryBody || !currentUser) return;

        const ordersKey = `urbanBloomOrders_${currentUser.email}`;
        const orders = JSON.parse(localStorage.getItem(ordersKey)) || [];

        if (orders.length === 0) {
            orderHistoryBody.innerHTML = '<tr><td colspan="4" style="text-align:center;">You have no past orders.</td></tr>';
            return;
        }

        orders.sort((a, b) => b.numericDate - a.numericDate);

        orderHistoryBody.innerHTML = orders.map(order => `
            <tr>
                <td>#${order.id}</td>
                <td>${order.date}</td>
                <td>₹${order.total.toFixed(2)}</td>
                <td>${order.status}</td>
            </tr>
        `).join('');
    }

    function saveCart() {
        localStorage.setItem('urbanBloomCart', JSON.stringify(cart));
    }

    function saveReviews() {
        localStorage.setItem('urbanBloomReviews', JSON.stringify(userReviews));
    }

    function saveWishlist() {
        if (currentUser) {
            localStorage.setItem(`urbanBloomWishlist_${currentUser.email}`, JSON.stringify(wishlist));
        }
    }

    function renderProducts(productList, gridElement) {
        if (!gridElement) return;
        if (productList.length === 0) {
            gridElement.innerHTML = `<p style="text-align: center; width: 100%;">No plants found matching your criteria.</p>`;
            return;
        }
        gridElement.innerHTML = productList.map(product => `
            <div class="product-card">
                <button class="wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}" data-id="${product.id}">
                    <i class="fas fa-heart"></i>
                </button>
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-card-clickable" data-id="${product.id}">
                    <img src="${product.imageUrl}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/800x800/97A97C/FFFFFF?text=Image+Not+Found';">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="price">₹${product.price.toFixed(2)}</p>
                        <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function renderCart() {
        if (!cartItemsContainer) return;
        const cartItems = Object.values(cart);
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart-message">Your cart is currently empty.</div>';
        } else {
            cartItemsContainer.innerHTML = cartItems.map(item => `
                <div class="cart-item">
                    <img src="${item.imageUrl}" alt="${item.name}" onerror="this.onerror=null;this.src='https://placehold.co/70x90/97A97C/FFFFFF?text=No+Image';">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p class="price">₹${item.price.toFixed(2)}</p>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" data-id="${item.id}" data-change="-1">-</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn" data-id="${item.id}" data-change="1">+</button>
                        </div>
                    </div>
                    <i class="fas fa-trash-alt cart-item-remove" data-id="${item.id}"></i>
                </div>
            `).join('');
        }

        updateCartInfo();
        saveCart();
    }

    function updateCartInfo() {
        const cartItems = Object.values(cart);
        const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        if (cartItemCountEl) cartItemCountEl.textContent = itemCount;
        if (cartTotalPriceEl) cartTotalPriceEl.textContent = `₹${subtotal.toFixed(2)}`;

        if (itemCount > 0 && cartItemCountEl) {
            cartItemCountEl.classList.add('update');
            setTimeout(() => cartItemCountEl.classList.remove('update'), 200);
        }
    }

    function addToCart(productId, buttonElement) {
        if (cart[productId]) {
            cart[productId].quantity++;
        } else {
            const product = products.find(p => p.id === productId);
            cart[productId] = { ...product, quantity: 1 };
        }

        buttonElement.innerHTML = 'Added! <i class="fas fa-check"></i>';
        buttonElement.classList.add('added');
        buttonElement.disabled = true;

        setTimeout(() => {
            buttonElement.innerHTML = 'Add to Cart';
            buttonElement.classList.remove('added');
            buttonElement.disabled = false;
        }, 1500);

        renderCart();
    }

    function updateQuantity(productId, change) {
        if (cart[productId]) {
            cart[productId].quantity += change;
            if (cart[productId].quantity <= 0) {
                delete cart[productId];
            }
        }
        renderCart();
    }

    function removeFromCart(productId) {
        if (cart[productId]) {
            delete cart[productId];
        }
        renderCart();
    }

    function clearCart() {
        cart = {};
        renderCart();
    }

    function toggleCart() {
        if (cartSidebar) cartSidebar.classList.toggle('open');
    }

    function showModal(content, isProductDetail = false) {
        modalBody.innerHTML = content;
        modal.querySelector('.modal-content').classList.toggle('product-detail-modal', isProductDetail);
        modal.classList.add('visible');
    }

    function renderOrderSummary() {
        if (!summaryItemsContainer) return;

        const cartItems = Object.values(cart);
        const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let shippingCost = subtotal > 999 || (appliedCoupon && appliedCoupon.type === 'shipping') ? 0 : 99;
        let discount = 0;

        const discountContainer = document.getElementById('summary-discount');

        if (appliedCoupon && appliedCoupon.type === 'percent') {
            discount = subtotal * appliedCoupon.value;
            discountContainer.innerHTML = `<span>Discount (${appliedCoupon.code})</span><span>- ₹${discount.toFixed(2)}</span>`;
            discountContainer.style.display = 'flex';
        } else {
            discountContainer.style.display = 'none';
        }

        const total = subtotal - discount + shippingCost;

        if (cartItems.length === 0) {
            summaryItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            document.getElementById('coupon-form').style.display = 'none';
        } else {
            summaryItemsContainer.innerHTML = cartItems.map(item => `
            <div class="summary-item">
                <span>${item.name} x ${item.quantity}</span>
                <span>₹${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');
            document.getElementById('coupon-form').style.display = 'flex';
        }

        summaryShippingEl.textContent = shippingCost === 0 ? 'FREE' : `₹${shippingCost.toFixed(2)}`;
        summaryTotalPriceEl.textContent = `₹${total.toFixed(2)}`;
    }

    function renderStars(rating) {
        let starsHTML = '';
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fas fa-star"></i>';
        if (halfStar) starsHTML += '<i class="fas fa-star-half-alt"></i>';
        for (let i = 0; i < emptyStars; i++) starsHTML += '<i class="far fa-star"></i>';

        return starsHTML;
    }

    function openProductModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingReviews = userReviews[productId] || [];
        const reviewsHTML = existingReviews.map(review => `
            <div class="review">
                <div class="star-rating">${renderStars(review.rating)}</div>
                <p class="review-author">${review.name}</p>
                <p>"${review.comment}"</p>
            </div>
        `).join('');

        const modalHTML = `
            <div class="product-detail-layout">
                <img src="${product.imageUrl}" alt="${product.name}" class="product-detail-image" onerror="this.onerror=null;this.src='https://placehold.co/800x800/97A97C/FFFFFF?text=Image+Not+Found';">
                <div class="product-detail-info">
                    <h3>${product.name}</h3>
                    <div class="star-rating">
                        ${renderStars(product.rating)}
                        <span>(${product.reviewCount} reviews)</span>
                    </div>
                    <p class="price">₹${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                    <h3>Care Instructions</h3>
                    <p>${product.care}</p>
                    <button class="btn add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                    <div class="reviews-section">
                        <h4>Customer Reviews</h4>
                        <div id="reviews-list">
                            ${reviewsHTML}
                        </div>
                        <div class="review-form-container">
                            <button class="btn" id="write-review-btn">Write a Review</button>
                            <form class="review-form" id="review-form" style="display: none;" data-product-id="${product.id}">
                                <h5>Your Rating</h5>
                                <div class="star-input" data-rating="0">
                                    <i class="far fa-star" data-value="1"></i><i class="far fa-star" data-value="2"></i><i class="far fa-star" data-value="3"></i><i class="far fa-star" data-value="4"></i><i class="far fa-star" data-value="5"></i>
                                </div>
                                <input type="text" name="name" placeholder="Your Name" required>
                                <textarea name="comment" placeholder="Your Review" required></textarea>
                                <button type="submit" class="btn">Submit Review</button>
                            </form>
                            <p id="review-thanks" style="display:none;">Thank you for your review!</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        showModal(modalHTML, true);
    }

    function updateShopView() {
        if (!shopProductGrid) return;
        const searchTerm = searchBar.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        const sortValue = sortSelect.value;

        let filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm);
            const matchesFilter = activeFilter === 'all' || product.categories.includes(activeFilter);
            return matchesSearch && matchesFilter;
        });

        if (sortValue === 'price-asc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-desc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        renderProducts(filteredProducts, shopProductGrid);
    }

    function updateUserNav() {
        if (!userNav) return;
        if (currentUser) {
            navLinksContainer.innerHTML = `
                <a href="index.html">Home</a>
                <a href="shop.html">Shop</a>
                <a href="my-account.html">My Account</a>
                <a href="wishlist.html">Wishlist</a>
            `;
            userNav.innerHTML = `
                <span>Welcome, ${currentUser.name}!</span>
                <button class="logout-btn">Logout</button>
            `;
        } else {
            navLinksContainer.innerHTML = `
                <a href="index.html">Home</a>
                <a href="shop.html">Shop</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            `;
            userNav.innerHTML = `<a href="login.html">Login</a>`;
        }
    }

    function toggleWishlist(productId, buttonElement) {
        if (!currentUser) {
            const modalHTML = '<h3>Login Required</h3><p>Please log in to use the wishlist feature.</p><button class="modal-close-btn">OK</button>';
            showModal(modalHTML);
            return;
        }
        const index = wishlist.indexOf(productId);
        if (index > -1) {
            wishlist.splice(index, 1);
            buttonElement.classList.remove('active');
        } else {
            wishlist.push(productId);
            buttonElement.classList.add('active');
        }
        saveWishlist();
        if (wishlistGrid) {
            const wishlistItems = products.filter(p => wishlist.includes(p.id));
            renderProducts(wishlistItems, wishlistGrid);
        }
    }

    // --- EVENT LISTENERS ---
    if (cartButton) cartButton.addEventListener('click', toggleCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open');
            document.body.classList.toggle('nav-is-open');
            const icon = mobileNavToggle.querySelector('i');
            if (mainNav.classList.contains('nav-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    document.body.addEventListener('click', (e) => {
        const productCardClickable = e.target.closest('.product-card-clickable');
        const addToCartBtn = e.target.closest('.add-to-cart-btn');
        const wishlistBtn = e.target.closest('.wishlist-btn');

        if (addToCartBtn) {
            addToCart(addToCartBtn.dataset.id, addToCartBtn);
        } else if (productCardClickable) {
            openProductModal(productCardClickable.dataset.id);
        } else if (wishlistBtn) {
            toggleWishlist(wishlistBtn.dataset.id, wishlistBtn);
        }

        if (e.target.classList.contains('quantity-btn')) {
            updateQuantity(e.target.dataset.id, parseInt(e.target.dataset.change));
        }
        if (e.target.classList.contains('cart-item-remove')) {
            removeFromCart(e.target.dataset.id);
        }

        if (e.target.id === 'write-review-btn') {
            e.target.style.display = 'none';
            document.getElementById('review-form').style.display = 'flex';
        }
        if (e.target.parentElement && e.target.parentElement.classList.contains('star-input')) {
            const rating = e.target.dataset.value;
            const stars = e.target.parentElement.children;
            e.target.parentElement.dataset.rating = rating;
            for (let i = 0; i < 5; i++) {
                stars[i].classList.toggle('fas', i < rating);
                stars[i].classList.toggle('far', i >= rating);
            }
        }

        if (e.target.classList.contains('logout-btn')) {
            currentUser = null;
            sessionStorage.removeItem('urbanBloomUser');
            window.location.href = 'index.html';
        }
    });

    if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (Object.keys(cart).length === 0) {
                const modalHTML = '<h3>Cart is Empty</h3><p>Please add items to your cart before checking out.</p><button class="modal-close-btn">OK</button>';
                showModal(modalHTML);
                return;
            }
            if (currentUser) {
                window.location.href = 'checkout.html';
            } else {
                const modalHTML = '<h3>Login Required</h3><p>Please log in to proceed to checkout.</p><button class="modal-close-btn">OK</button>';
                showModal(modalHTML);
                sessionStorage.setItem('redirectAfterLogin', 'checkout.html');
                setTimeout(() => {
                    if (!modal.classList.contains('visible')) {
                        window.location.href = 'login.html';
                    }
                }, 500);
            }
        });
    }

    if (paymentOptions) {
        paymentOptions.forEach(option => {
            option.addEventListener('click', () => {
                paymentOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                selectedPaymentMethod = option.dataset.method;
            });
        });
    }

    document.body.addEventListener('submit', (e) => {
        if (e.target.id === 'coupon-form') {
            e.preventDefault();
            const codeInput = document.getElementById('coupon-code');
            const code = codeInput.value.toUpperCase();
            let modalHTML = '';

            if (coupons[code]) {
                appliedCoupon = { code: code, ...coupons[code] };
                sessionStorage.setItem('urbanBloomCoupon', JSON.stringify(appliedCoupon));
                modalHTML = `<h3>Success</h3><p>Coupon "${code}" applied successfully!</p><button class="modal-close-btn">OK</button>`;
            } else {
                appliedCoupon = null;
                sessionStorage.removeItem('urbanBloomCoupon');
                modalHTML = `<h3>Invalid Coupon</h3><p>The coupon code you entered is not valid.</p><button class="modal-close-btn">OK</button>`;
            }
            showModal(modalHTML);
            codeInput.value = '';
            renderOrderSummary();
        }
    });

    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', () => {
            let isFormValid = true;
            const inputs = shippingForm.querySelectorAll('input[required]');
            inputs.forEach(input => input.classList.remove('invalid'));
            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.classList.add('invalid');
                    isFormValid = false;
                }
            });

            if (!isFormValid) {
                const modalHTML = `<h3>Incomplete Information</h3><p>Please fill out all the highlighted required fields.</p><button class="modal-close-btn">OK</button>`;
                showModal(modalHTML);
                return;
            }

            if (!selectedPaymentMethod) {
                const modalHTML = `<h3>Payment Method</h3><p>Please select a payment method.</p><button class="modal-close-btn">OK</button>`;
                showModal(modalHTML);
                return;
            }

            if (currentUser) {
                const purchasedKey = `urbanBloomPurchased_${currentUser.email}`;
                let purchasedItems = JSON.parse(localStorage.getItem(purchasedKey)) || [];
                const cartItemIds = Object.keys(cart);
                const newItems = cartItemIds.filter(id => !purchasedItems.includes(id));
                localStorage.setItem(purchasedKey, JSON.stringify([...purchasedItems, ...newItems]));

                const ordersKey = `urbanBloomOrders_${currentUser.email}`;
                let existingOrders = JSON.parse(localStorage.getItem(ordersKey)) || [];
                const cartItems = Object.values(cart);
                const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                let shippingCost = subtotal > 999 || (appliedCoupon && appliedCoupon.type === 'shipping') ? 0 : 99;
                let discount = 0;
                 if (appliedCoupon && appliedCoupon.type === 'percent') {
                    discount = subtotal * appliedCoupon.value;
                }
                const total = subtotal - discount + shippingCost;
                
                const newOrder = {
                    id: Date.now().toString().slice(-6),
                    date: new Date().toLocaleDateString('en-IN'),
                    numericDate: Date.now(),
                    total: total,
                    status: 'Delivered'
                };
                existingOrders.push(newOrder);
                localStorage.setItem(ordersKey, JSON.stringify(existingOrders));
            }

            const successHTML = `<h3>Thank You!</h3><p>Your order has been placed successfully! (This is a simulation).</p><button class="modal-close-btn">Awesome!</button>`;
            showModal(successHTML);
            clearCart();
            sessionStorage.removeItem('urbanBloomCoupon');
            setTimeout(() => {
                modal.classList.remove('visible');
                window.location.href = 'index.html';
            }, 2000);
        });
    }

    if (modalCloseIcons) {
        modalCloseIcons.forEach(btn => btn.addEventListener('click', () => modal.classList.remove('visible')));
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-close-btn')) {
                modal.classList.remove('visible');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const contactHTML = `<h3>Message Sent!</h3><p>Thank you for your message. We will get back to you shortly (this is a simulation).</p><button class="modal-close-btn">OK</button>`;
            showModal(contactHTML);
            contactForm.reset();
        });
    }

    document.body.addEventListener('submit', (e) => {
        if (e.target.id === 'review-form') {
            e.preventDefault();
            const form = e.target;
            const productId = form.dataset.productId;
            const name = form.elements.name.value;
            const comment = form.elements.comment.value;
            const rating = form.querySelector('.star-input').dataset.rating;

            if (rating === "0") {
                const modalHTML = '<h3>Rating Required</h3><p>Please select a star rating.</p><button class="modal-close-btn">OK</button>';
                showModal(modalHTML);
                return;
            }

            const newReview = { name, comment, rating };
            if (!userReviews[productId]) {
                userReviews[productId] = [];
            }
            userReviews[productId].unshift(newReview);
            saveReviews();

            form.style.display = 'none';
            document.getElementById('review-thanks').style.display = 'block';

            const reviewsList = document.getElementById('reviews-list');
            const newReviewHTML = `
                <div class="review">
                    <div class="star-rating">${renderStars(newReview.rating)}</div>
                    <p class="review-author">${newReview.name}</p>
                    <p>"${newReview.comment}"</p>
                </div>
            `;
            reviewsList.insertAdjacentHTML('afterbegin', newReviewHTML);
        }
    });

    if (searchBar) searchBar.addEventListener('input', updateShopView);
    if (sortSelect) sortSelect.addEventListener('change', updateShopView);
    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                updateShopView();
            });
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            let users = JSON.parse(localStorage.getItem('urbanBloomUsers')) || [];
            if (users.find(user => user.email === email)) {
                const modalHTML = '<h3>Account Exists</h3><p>An account with this email already exists. Please try logging in.</p><button class="modal-close-btn">OK</button>';
                showModal(modalHTML);
                return;
            }

            const newUser = { name, email, password };
            users.push(newUser);
            localStorage.setItem('urbanBloomUsers', JSON.stringify(users));

            currentUser = newUser;
            sessionStorage.setItem('urbanBloomUser', JSON.stringify(currentUser));
            window.location.href = 'index.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            let users = JSON.parse(localStorage.getItem('urbanBloomUsers')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                currentUser = user;
                sessionStorage.setItem('urbanBloomUser', JSON.stringify(currentUser));
                const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
                if (redirectUrl) {
                    sessionStorage.removeItem('redirectAfterLogin');
                    window.location.href = redirectUrl;
                } else {
                    window.location.href = 'index.html';
                }
            } else {
                const modalHTML = '<h3>Login Failed</h3><p>Invalid email or password. Please try again.</p><button class="modal-close-btn">OK</button>';
                showModal(modalHTML);
            }
        });
    }

    if (savedAddressForm) {
        savedAddressForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (currentUser) {
                const addressData = {
                    name: document.getElementById('saved-name').value,
                    address: document.getElementById('saved-address').value,
                    city: document.getElementById('saved-city').value,
                    pincode: document.getElementById('saved-pincode').value,
                    phone: document.getElementById('saved-phone').value,
                };
                localStorage.setItem(`urbanBloomAddress_${currentUser.email}`, JSON.stringify(addressData));
                const modalHTML = '<h3>Success</h3><p>Your address has been saved successfully!</p><button class="modal-close-btn">OK</button>';
                showModal(modalHTML);
            } else {
                const modalHTML = '<h3>Login Required</h3><p>You must be logged in to save an address.</p><button class="modal-close-btn">OK</button>';
                showModal(modalHTML);
            }
        });
    }


    // --- INITIALIZATION ---
    if (newArrivalsGrid) {
        renderProducts(products.slice(0, 4), newArrivalsGrid);
    }
    if (bestSellersGrid) {
        const bestSellers = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
        renderProducts(bestSellers, bestSellersGrid);
    }
    if (shopProductGrid) {
        renderProducts(products, shopProductGrid);
    }
    if (wishlistGrid) {
        const wishlistItems = products.filter(p => wishlist.includes(p.id));
        renderProducts(wishlistItems, wishlistGrid);
    }
    if (accountHeader && currentUser) {
        accountHeader.textContent = `Welcome, ${currentUser.name}`;
    }

    if (shippingForm && currentUser) {
        const savedAddress = JSON.parse(localStorage.getItem(`urbanBloomAddress_${currentUser.email}`));
        if (savedAddress) {
            document.getElementById('name').value = savedAddress.name || '';
            document.getElementById('address').value = savedAddress.address || '';
            document.getElementById('city').value = savedAddress.city || '';
            document.getElementById('pincode').value = savedAddress.pincode || '';
            document.getElementById('phone').value = savedAddress.phone || '';
        }
    }
    
    if (shippingForm) {
        shippingForm.addEventListener('input', (e) => {
            if (e.target.tagName === 'INPUT' && e.target.classList.contains('invalid')) {
                if (e.target.checkValidity()) {
                    e.target.classList.remove('invalid');
                }
            }
        });
    }

    renderCart();
    updateUserNav();
    renderOrderSummary();
    renderMyPlants();
    renderOrderHistory();
});