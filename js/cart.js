document.addEventListener("DOMContentLoaded", () => {
  const increaseBtns = document.querySelectorAll(".increase");
  const decreaseBtns = document.querySelectorAll(".decrease");
  const removeBtns = document.querySelectorAll(".remove");
  const totalDisplay = document.querySelector(".cart-summary h2");

  function updateTotal() {
    const qty = parseInt(document.querySelector(".qty").textContent);
    const pricePerItem = 2500;
    const total = qty * pricePerItem;
    totalDisplay.textContent = `Total: ₦${total.toLocaleString()}`;
  }

  increaseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const qtyEl = btn.previousElementSibling;
      let qty = parseInt(qtyEl.textContent);
      qtyEl.textContent = ++qty;
      updateTotal();
    });
  });

  decreaseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const qtyEl = btn.nextElementSibling;
      let qty = parseInt(qtyEl.textContent);
      if (qty > 1) {
        qtyEl.textContent = --qty;
        updateTotal();
      }
    });
  });

  removeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".cart-item");
      item.remove();
      updateTotal();
    });
  });

  updateTotal(); // initial call
});
