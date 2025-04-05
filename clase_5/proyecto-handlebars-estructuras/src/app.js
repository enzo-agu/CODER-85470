import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

app.engine('handlebars', handlebars.engine()); // Configuramos Handlebars como motor de plantillas
app.set('views', `${__dirname}/views`); // Establecemos la carpeta de vistas
app.set('view engine', 'handlebars'); // Establecemos Handlebars como el motor de plantillas por defecto    

// app.use(express.static(`${__dirname}./public`)); // Servimos archivos estáticos desde la carpeta public

app.get('/', (req, res) => {
    let user = {
        name: 'Juan',
        lastName: 'Pérez',
        adminRole: 'admin', // Cambiar a 'user' para probar el otro caso
        // userRole:'user'
    };

    let food = [
        { name: 'Pizza', price: 10 },
        { name: 'Hamburguesa', price: 8 },
        { name: 'Ensalada', price: 6 },
        { name: 'Pasta', price: 12 },
        { name: 'Sushi', price: 15 },
    ];

    res.render('index', { user, food }); // Pasamos el usuario y la lista de alimentos
})


app.listen(8080, () => {
    console.log('Server running on port 8080');
})