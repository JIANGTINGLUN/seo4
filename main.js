// Helper function to render products
function renderProducts(filterCategory = null) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const filtered = filterCategory 
        ? products.filter(p => p.category === filterCategory)
        : products;

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <a href="product-detail.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}" class="card-img">
                <div class="card-info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                </div>
            </a>
        `;
        grid.appendChild(card);
    });
}

// Handle product detail page
function loadProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = products.find(p => p.id === id);

    if (product) {
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;
        document.title = `${product.name} - Elysian`;
    }
}

// Mobile menu toggle (simple version)
document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on a category page
    const bodyId = document.body.id;
    if (bodyId === 'home-page') {
        renderProducts(); // Render all for home or featured
    } else if (['casual', 'formal', 'jewelry', 'accessories', 'others'].includes(bodyId)) {
        renderProducts(bodyId);
    } else if (bodyId === 'product-detail-page') {
        loadProductDetail();
    }
});
