### Optimization: Minimize HTTP Requests

**Objective**: Reduce the number of HTTP requests to improve the performance of the e-commerce web application.

**Areas of Focus**:

1. **Combine CSS and JavaScript Files**:
    - Ensure all CSS is in a single

styles.css

file.
- Combine multiple JavaScript files into a single

script.js

file.

### Steps to Optimize

1. **Combine CSS Files**:
    - Merge the contents of

base.css

,

header-footer.css

,

navigation.css

, and

products.css

into a single

styles.css

file.

1. **Combine JavaScript Files**:
    - Merge the contents of

cart.js

,

updateCart.js

, and

checkout.js

into a single

script.js

file.

### Implementation

### Combine CSS Files

Create a new

styles.css

file with the following content:

```css
/* base.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* header-footer.css */
header, footer {
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
}
footer p {
  margin: 0;
}

/* navigation.css */
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin: 0 10px;
}
nav ul li a {
  text-decoration: none;
  color: #333;
}
nav ul li a:hover {
  text-decoration: underline;
}

/* products.css */
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.product {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  width: 200px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.product img {
  max-width: 100%;
  height: auto;
}
.product h3 {
  margin: 10px 0;
}
.product p {
  margin: 5px 0;
}
.product button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
.product button:hover {
  background-color: #218838;
}

```

### Combine JavaScript Files

Create a new

script.js

file with the following content:

```jsx
let cart = [];

function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
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
        div.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
        cartItems.appendChild(div);
        total += item.price * item.quantity;
    });

    totalPrice.textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    alert('Checkout functionality is not implemented yet.');
}

```

### Update HTML Files

Update the HTML files to reference the new combined CSS and JavaScript files.

### 

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My E-Commerce Site</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>My E-Commerce Site</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="cart.html">Cart</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Welcome to our store!</h2>
        <p>Browse our collection of amazing products.</p>
    </main>
    <footer>
        <p>&copy; 2023 My E-Commerce Site</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>

```

### 

products.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products - My E-Commerce Site</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>My E-Commerce Site</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="cart.html">Cart</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Products</h2>
        <div class="product-list">
            <div class="product">
                <img src="product1.jpg" alt="Product 1">
                <h3>Product 1</h3>
                <p>Description of Product 1</p>
                <p>$10.00</p>
                <button onclick="addToCart('Product 1', 10.00)">Add to Cart</button>
            </div>
            <div class="product">
                <img src="product2.png" alt="Product 2">
                <h3>Product 2</h3>
                <p>Description of Product 2</p>
                <p>$20.00</p>
                <button onclick="addToCart('Product 2', 20.00)">Add to Cart</button>
            </div>
            <!-- Add more products as needed -->
        </div>
    </main>
    <footer>
        <p>&copy; 2023 My E-Commerce Site</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>

```

### 

cart.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart - My E-Commerce Site</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>My E-Commerce Site</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="cart.html">Cart</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Shopping Cart</h2>
        <div id="cart-items">
            <!-- Cart items will be dynamically added here -->
        </div>
        <p>Total: $<span id="total-price">0.00</span></p>
        <button onclick="checkout()">Checkout</button>
    </main>
    <footer>
        <p>&copy; 2023 My E-Commerce Site</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>

```

By following these steps, you will have combined all CSS into a single

styles.css

file and all JavaScript into a single

script.js

file, reducing the number of HTTP requests and improving the performance of your e-commerce web application.

Similar code found with 1 license type
