const fs = require('fs');

const fileName = 'fecha_hora.txt';

const fechaHora= new Date().toLocaleString();

// ESCRIBE EL ARCHIVO
fs.writeFile(fileName, `Fecha y hora actual : ${fechaHora}\n`,(err)=>{

    if(err){
        console.error('Error:',err);
        return;
    }
    console.log('Archivo creado');


    fs.readFile(fileName,'utf-8',(err,data)=>{

        if(err){
            console.error('Error:',err);
            return;
        }
        console.log('Contenido del archivo:',data);
    })

})