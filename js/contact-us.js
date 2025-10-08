document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from reloading the page

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);

  // Clear form
  this.reset();
});
