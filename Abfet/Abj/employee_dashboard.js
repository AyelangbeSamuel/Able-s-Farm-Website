const emp = { name: 'Chinedu', id:'ABFET-0001' };
document.getElementById('emp-name').textContent = emp.name;
document.getElementById('emp-id').textContent = emp.id;

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.sidebar button').forEach(b => b.classList.toggle('active', b.textContent.trim().toLowerCase() === id));
}

document.getElementById('loan-form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('loan-status').textContent = `Loan of ₦${e.target['loan-amount'].value} submitted!`;
  e.target.reset();
});

const memos = ['Welcome aboard!', 'Team meeting: Friday @10am', 'Submit timesheet by end of day'];
const ul = document.getElementById('memo-list');
memos.forEach(m => {
  const li = document.createElement('li');
  li.textContent = m;
  ul.appendChild(li);
});
