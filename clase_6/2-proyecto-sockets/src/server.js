import { Socket } from 'dgram';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const PORT = 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Archivos estáticos
app.use(express.static('src/public'));

// Socket
io.on('connection', (socket)=>{
    console.log('Nuevo usuario conectado', socket.id);

    socket.on('chat mensaje', (msg)=>{

        console.log('Mensaje: 👉', msg);

        io.emit('chat mensaje' , msg)

    })

    socket.on('disconnect',()=>{
        console.log('Usuario desconectado', socket.id);
    })

})


server.listen(PORT, ()=>{
    console.log(`Servidor en http://localhost:${PORT}`);
})


