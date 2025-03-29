// EJEMPLO 4 SERVIDOR ARRAY - URL PARAMS 🚀

// const express = require('express');
// const app = express();
// const PORT = 8080;


// const usuarios = [
//     {
//         id:1,
//         nombre:'Juan',
//         apellido:'Pérez',
//         edad:30,
//         correo:'juan@gmail.com'
//     },
//     {
//         id:2,
//         nombre:'Romina',
//         apellido:'Gonzalez',
//         edad:31,
//         correo:'romina@gmail.com'
//     },
//     {
//         id:3,
//         nombre:'Martín',
//         apellido:'Galvez',
//         edad:25,
//         correo:'Martín@gmail.com'
//     }
// ]


// app.get('/', (req,res)=>{
//     res.json(usuarios)
// });

// app.get('/:id', (req,res)=>{
//     const {id} = req.params

//     const usuario = usuarios.find( u => u.id === parseInt(id))

//     if(usuario){
//         res.json({usuario})
//     }
//     else(
//         res.status(404).send('Usuario no encontrado.')
//     )

// })

// app.listen(PORT, ()=>{
//     console.log(`Servidor corriendo en http://localhost:${PORT}`)
// })


// EJEMPLO 5 SERVIDOR - ARRAY - QUERY PARAMS 🚀


// import express from 'express';
// const app = express();
// const PORT = 8080;

// const usuarios = [
//     {
//         id:1,
//         nombre:'Juan',
//         apellido:'Pérez',
//         edad:30,
//         correo:'juan@gmail.com',
//         genero:'masculino'
//     },
//     {
//         id:2,
//         nombre:'Romina',
//         apellido:'Gonzalez',
//         edad:31,
//         correo:'romina@gmail.com',
//         genero:'femenino'
//     },
//     {
//         id:3,
//         nombre:'Martín',
//         apellido:'Galvez',
//         edad:25,
//         correo:'Martín@gmail.com',
//         genero:'masculino'
//     },
//     {
//         id:2,
//         nombre:'Andrea',
//         apellido:'Martínez',
//         edad:39,
//         correo:'Andrea@gmail.com',
//         genero:'femenino'
//     },
// ]

// app.get('/', (req,res)=>{

//   const { genero } = req.query

//   if(genero){
//     // CON FILTRO DE QUERY PARMAS, DEVUELVE LOS DEL GENERO.
//     const usuariosFiltrados = usuarios.filter( u => u.genero.toLowerCase() === genero.toLowerCase())
//     res.json({usuariosFiltrados});
//   }

//   else{
//     // SIN FILTRO DEVUELVE TODOS
//     res.json(usuarios)
//   }

// })

// app.listen(PORT, ()=>{
//     console.log(`Servidor corriendo en http://localhost:${PORT}`)
// })


