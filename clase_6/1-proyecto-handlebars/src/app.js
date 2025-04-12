import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const socketServer = new Server(server);

app.engine('handlebars', handlebars.engine()); // Configuramos Handlebars como motor de plantillas
app.set('views', `${__dirname}/views`); // Establecemos la carpeta de vistas
app.set('view engine', 'handlebars'); // Establecemos Handlebars como el motor de plantillas por defecto    

app.use(express.static(`${__dirname}/public`)); // Servimos archivos estáticos desde la carpeta public

app.get('/', (req, res) => {

    res.render('index'); // Renderizamos la vista home.handlebars
})

const dataDos= 'Sábado 12 de Abril'

socketServer.on('connection', (socket)=>{

    console.log('Nuevo cliente conectado', socket.id);

    // socket.on sirve para escuchar/recibir eventos del cliente y ejecutar una función
    socket.on('message', (data)=>{

        console.log('DATA:', data);

        // socket.emit sirve para enviar un evento al cliente.
        socket.emit('ClientMessage', dataDos, socket.id);

    })

    socket.on('disconnect',()=>{
        console.log('Cliente desconectado', socket.id);
    })

})


// app.listen(8080, () => {
//     console.log('Server running on port 8080');
// })

server.listen(8080,()=>{
    console.log('http://localhost:8080');
})