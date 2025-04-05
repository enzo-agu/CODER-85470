import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { router } from './routes/user.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', router);

const PORT = 3000 ;
app.listen(PORT, ()=>{
    console.log(`Servidor en http://localhost:${PORT}`);
})