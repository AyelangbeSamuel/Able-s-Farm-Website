document.addEventListener("DOMContentLoaded", () => {
  const addToCartButton = document.querySelector(".add-to-cart");

  if (addToCartButton) {
    addToCartButton.addEventListener("click", () => {
      // Simulate adding product to cart
      alert("✅ Broiler Chicken added to your cart!");

      // Optional: You could update a cart count or redirect user
      // Example: redirect to cart page
      // window.location.href = "cart.html";
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.querySelector(".add-to-cart");

  addToCartBtn.addEventListener("click", () => {
    const product = {
      id: 1,
      name: "Broiler Chicken",
      price: 2500,
      image: "images/Broiler.jpeg",
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  });
});
