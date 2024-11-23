function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
      const div = document.createElement('div');
      div.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
      cartItems.appendChild(div);
      total += item.price * item.quantity;
  });

  totalPrice.textContent = total.toFixed(2);
}
