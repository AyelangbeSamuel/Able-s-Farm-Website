let cartItems = 0;
const cartCount = document.getElementById('cart-count');
const searchBar = document.getElementById('search-bar');
const suggestions = document.getElementById('search-suggestions');

// Autocomplete list
const productNames = [
  'Broiler Chicken',
  'Layer Chicken',
  'Noiler Chicken',
  'Duck',
  'Turkey'
];

// Populate datalist
productNames.forEach(name => {
  const option = document.createElement('option');
  option.value = name;
  suggestions.appendChild(option);
});

// Real-time search
const noMatchMessage = document.createElement('p');
noMatchMessage.textContent = 'No birds found.';
noMatchMessage.style.color = 'red';
noMatchMessage.style.textAlign = 'center';
noMatchMessage.style.display = 'none';
document.querySelector('main').appendChild(noMatchMessage);

searchBar.addEventListener('input', () => {
  const query = searchBar.value.trim().toLowerCase();
  let found = false;

  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'block';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });

  noMatchMessage.style.display = found ? 'none' : 'block';
});

// Add to Cart with stock check
window.addToCart = function (btn) {
  const card = btn.closest('.product-card');
  let stock = parseInt(card.dataset.stock);

  if (stock > 0) {
    stock--;
    card.dataset.stock = stock;
    cartItems++;
    cartCount.textContent = cartItems;

    if (stock === 0) {
      btn.textContent = "Out of Stock";
      btn.disabled = true;
      btn.classList.add("disabled");
    }

    showCartNotice();
  }
};

// Floating cart notice
function showCartNotice() {
  const notice = document.getElementById('cart-notice');
  if (notice) {
    notice.classList.add('show');
    setTimeout(() => {
      notice.classList.remove('show');
    }, 2000);
  }
}

// Wishlist
window.addToWishlist = function (btn) {
  const name = btn.closest('.product-card').querySelector('h3').textContent;
  alert(`❤️ ${name} added to your wishlist!`);
};
// Modal logic
function showDetails(btn) {
  const card = btn.closest('.product-card');
  const title = card.querySelector('h3').textContent;
  const price = card.querySelector('p').textContent;
  const img = card.querySelector('img').src;

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-image').src = img;

  document.getElementById('product-modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('product-modal').style.display = 'none';
}

// Local Storage: Restore cart count
window.addEventListener('load', () => {
  const savedCount = localStorage.getItem('cartItems');
  if (savedCount) {
    cartItems = parseInt(savedCount);
    cartCount.textContent = cartItems;
  }
});

// Local Storage: Save cart count
function updateCartCount(newCount) {
  cartItems = newCount;
  cartCount.textContent = cartItems;
  localStorage.setItem('cartItems', cartItems);
}

// Modify addToCart function:
window.addToCart = function (btn) {
  const card = btn.closest('.product-card');
  let stock = parseInt(card.dataset.stock);

  if (stock > 0) {
    stock--;
    card.dataset.stock = stock;
    updateCartCount(cartItems + 1);

    if (stock === 0) {
      btn.textContent = "Out of Stock";
      btn.disabled = true;
      btn.classList.add("disabled");
    }

    showCartNotice();
  }
};

// Wishlist Save to LocalStorage
window.addToWishlist = function (btn) {
  const card = btn.closest('.product-card');
  const name = card.querySelector('h3').textContent;
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
  if (!wishlist.includes(name)) {
    wishlist.push(name);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`❤️ ${name} added to your wishlist!`);
  } else {
    alert(`Already in your wishlist!`);
  }
};
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

