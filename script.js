let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} has been added to your cart.`);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(div);
        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
}

function checkout() {
    alert('Checkout functionality is not implemented yet.');
}
