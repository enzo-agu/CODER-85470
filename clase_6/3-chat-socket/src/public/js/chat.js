// crea una conexión con el servidor usando Socket.IO.
const socket = io();

// se manda al servidor el nombre de usuario (username).
socket.emit('newUser', username);

// Historial
// El servidor, al conectarte, te envía el historial del chat.
// Este bloque recorre cada mensaje y lo muestra con la función addMessage.
socket.on('chatHistory', (history) => {
  history.forEach(({ user, message }) => {
    addMessage(`${user}: ${message}`);
  });
});


// Cada vez que recibimos un mensaje nuevo del servidor, se muestra automáticamente.
// Ya sea que lo mandes vos u otro usuario
socket.on('chatMessage', ({ user, message }) => {
  addMessage(`${user}: ${message}`);
});

const form = document.getElementById('messageForm');
const input = document.getElementById('messageInput');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = input.value.trim();
  if (!msg) return;

  socket.emit('chatMessage', msg);
  input.value = '';
});

function addMessage(text) {
  const li = document.createElement('li');
  li.textContent = text;
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight;
}
