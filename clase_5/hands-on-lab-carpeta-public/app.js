import express from 'express';
import path from 'path';
import userRouter from './routes/user.routes.js';
import petsRouter from './routes/pets.routes.js';
import __dirname from './utils/utils.js';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public'))) // Para servir archivos estáticos

app.use(express.json()) // Para parsear JSON

app.use('/api/users' , userRouter);
app.use('/api/pets', petsRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor en http://localhost:${PORT}`)
})