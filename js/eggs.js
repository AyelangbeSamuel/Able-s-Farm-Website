let cart = [];
let cartCount = 0;

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  cartCount++;
  updateCartDisplay();
}

function updateCartDisplay() {
  document.getElementById("cart-count").textContent = cartCount;

  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} x${item.quantity} - ₦${item.price * item.quantity}
      <span class="remove-btn" onclick="removeFromCart(${index})">[Remove]</span>
    `;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total;
}

function removeFromCart(index) {
  cartCount -= cart[index].quantity;
  cart.splice(index, 1);
  updateCartDisplay();
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}
