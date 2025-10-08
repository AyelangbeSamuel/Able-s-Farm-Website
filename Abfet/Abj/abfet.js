document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks! We’ll be in touch shortly.');
    e.target.reset();
  });
});
