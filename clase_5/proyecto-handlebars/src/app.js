import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.static(`${__dirname}./public`))

app.get('/', (req,res)=>{

    let user = {
        name: 'Enzo',
        lastName:'Agú'
    }

    res.render('index', user)

})


app.listen(8080,()=>{
    console.log('Servidor corriendo http://localhost:8080');
})