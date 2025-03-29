// EJMEPLO 3 SERVIDOR EXPRESS  -  ARRAY - OBJETOS -  ESTILOS 🚀

const express = require('express');
const app = express();
const PORT = 8080;

// Endpoint GET /bienvenida

app.get('/bienvenida', (req,res)=>{

    res.send('<h1 style="color:blue;" > Bienvenido/a a mi servidor con Express ! </h1>')

})


app.get('/usuario', (req,res)=>{

    const usuario = {
        nombre: 'Enzo',
        apellido: 'Agú',
        edad:36,
        correo:'enzo@gmail.com'
    }

    res.json({usuario})

})

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})