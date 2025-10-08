const departments = ['Drone Team','IoT R&D','Hydroponics','Support/Admin'];
function showDepartments() {
  const container = document.getElementById('departments');
  container.innerHTML = departments.map(d => `
    <div class="dept-card" onclick="startApplication('${d}')">${d}</div>
  `).join('');
}
function startApplication(dept) {
  document.getElementById('dept-selected').textContent = dept;
  const app = document.getElementById('application-form');
  app.classList.remove('hidden');
}
document.addEventListener('DOMContentLoaded', showDepartments);
