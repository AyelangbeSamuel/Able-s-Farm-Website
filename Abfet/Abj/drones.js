const droneData = Array.from({ length: 12 }, (_, i) => {
  const num = i + 1;
  return {
    id: num,
    name: `BULKY${num}`,
    weight: `${num * 5} kg`,
    price: 20000 + num * 5000,
    img: `images/drones/drone${num}.jpg`  // Corrected path
  };
});

function showDrones() {
  const container = document.getElementById('drone-cards');
  container.innerHTML = ''; // Clear existing content
  droneData.forEach(d => {
    const card = document.createElement('div');
    card.className = 'drone-card';
    card.innerHTML = `
      <img src="${d.img}" alt="${d.name}">
      <h3>${d.name}</h3>
      <p>Capacity: ${d.weight}</p>
      <p>₦${d.price.toLocaleString()}</p>
      <button class="subscribe-btn" onclick="subscribe(${d.id})">Subscribe</button>
    `;
    container.appendChild(card);
  });
}

function subscribe(id) {
  const drone = droneData.find(d => d.id === id);
  const qty = parseInt(prompt(`How many ${drone.name}s?`), 10);
  if (qty > 0) {
    const total = drone.price * qty;
    localStorage.setItem('lastOrder', JSON.stringify({ drone, qty, total }));
    window.location.href = 'payment.html';
  }
}

document.addEventListener('DOMContentLoaded', showDrones);
