import  express from 'express';
import { createServer } from 'http';
import  { Server } from 'socket.io';
import  { engine } from 'express-handlebars';
import  path from 'path';
import  router from './routes/views.routes.js';
import __dirname from './utils.js';

const app = express();
const server = createServer(app);
const io = new Server(server);

// Configuración de Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/', router);

// Socket
const messages = [];

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado', socket.id);

  socket.emit('chatHistory', messages);

  socket.on('newUser', (username) => {
    socket.username = username;

    // Notificar a todos menos al que se conectó
    socket.broadcast.emit('chatMessage', {
     user: 'Sistema',
     message: `${username} se ha unido al chat 👋`
   });

  });


  socket.on('chatMessage', (msg) => {
    const messageData = {
      user: socket.username || 'Anónimo',
      message: msg,
    };
    messages.push(messageData);
    io.emit('chatMessage', messageData);
  });

  socket.on('newUser', (username) => {
    socket.username = username;
  
  });

  socket.on('disconnect', () => {
    if (socket.username) {
      socket.broadcast.emit('chatMessage', {
        user: 'Sistema',
        message: `${socket.username} ha salido del chat ❌`
      });
    }
  });
  
  

});

// Servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
