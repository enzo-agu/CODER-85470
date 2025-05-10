import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user.routes.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))


mongoose.connect('mongodb+srv://user-zero-coder:shCJOZWczyOeKcgp@cluster-zero-coder.hch9w.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster-zero-coder')
.then(()=>console.log('MongoDB conectado'))
.catch(err=>console.log(err))

app.use('/api/users', router)

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})