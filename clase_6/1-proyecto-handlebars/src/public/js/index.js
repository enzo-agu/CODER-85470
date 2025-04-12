const socket = io() // Conexión al servidor de sockets.

// Enviar un mensaje al servidor.
socket.emit('message', 'Hola desde el cliente 😎');

socket.on('ClientMessage', (data, socket)=>{
    console.log('Mensaje recibido del servidor: 👉', data, socket);
})