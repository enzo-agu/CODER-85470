import express from 'express';
import userRouter from './routes/user.routes.js';
import petsRouter from './routes/pets.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json()) // Para parsear JSON

app.use('/api/users' , userRouter);
app.use('/api/pets', petsRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor en http://localhost:${PORT}`)
})