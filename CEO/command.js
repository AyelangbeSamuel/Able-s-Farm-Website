// Section navigation
document.querySelectorAll('.sidebar button:not(#kill-switch)').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.section).classList.add('active');
  });
});

// Chat
const chatWindow = document.getElementById('chat-window');
document.getElementById('chat-form').addEventListener('submit', e => {
  e.preventDefault();
  const msg = e.target.querySelector('input').value.trim();
  if (msg) {
    const el = document.createElement('div');
    el.textContent = `Able’s OP: ${msg}`;
    chatWindow.appendChild(el);
    e.target.reset();
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
});

// Memos
const memoBox = document.getElementById('memo-box');
document.getElementById('memo-send').addEventListener('click', () => {
  const text = document.getElementById('memo-text').value.trim();
  if (text) {
    const note = document.createElement('div');
    note.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
    memoBox.prepend(note);
    document.getElementById('memo-text').value = '';
  }
});

// Kill switch
document.getElementById('kill-switch').addEventListener('click', () => {
  if(confirm('Activate emergency shutdown?')) {
    alert('🚨 All systems shutting down.');
    // Add kill logic here
  }
});
