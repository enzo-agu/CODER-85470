// EJEMPLO 1 - SETTIMEOUT 🚀

// const temporizador = (callback)=>{
//     setTimeout(() => {
//         callback();
//     },3000);
// }
// const operacion = () =>{
//     console.log('Realizando operación...');
// }
// console.log('Iniciando temporizador...');

// temporizador(operacion);

// console.log('Fin del programa...');


// EJEMPLO 2 - SETINTERVAL 🚀

// const contador = () =>{
//     let contador = 1;
//     console.log('Contando...');

//     let timer = setInterval(() => {

//         console.log(contador++);
//         if ( contador > 5){
//             clearInterval(timer);
//         }
//     }, 1000)
// }

// console.log('Iniciando contador...');
// contador();
// console.log('Fin del programa...');

// OTRO MODO ✅

// const contador = async () => {
//     return new Promise((resolve)=>{
//         let contador = 1;

//         console.log('Contando...');
//         let timer = setInterval(()=>{

//             console.log(contador++);

//             if ( contador > 5){
//                 clearInterval(timer);
//                 resolve()
//             }
//         },1000)
//     })
// }

// const iniciar = async () => {
//     console.log('Iniciando contador...');
//     await contador();
//     console.log('Fin del programa...');

// }
// iniciar();



// EJEMPLO 3 - FS SYNC 🚀

// const fs = require('fs');

// fs.writeFileSync('archivo.txt','Hola mundo');

// console.log(fs.readFileSync('archivo.txt','utf-8'));

// fs.appendFileSync('archivo.txt','\nContenido agregado');

// fs.unlinkSync('archivo.txt');


// EJEMPLO 4 - FS ASYNC  🚀

// const {promises:fs} = require('fs');

// async function manageFiles() {

//     const filePath = './Node.txt';

//     try {

//         // CREAR EL ARCHIVO
//         await fs.writeFile(filePath,'Node js - inicios');
//         console.log('Archivo creado...');

//         // LEER EL ARCHIVO
//         const data = await fs.readFile(filePath,'utf-8');
//         console.log('Contenido del archivo:',data);

//         // AGREGAR CONTENIDO
//         await fs.appendFile(filePath,'\nNode js - avanzado');
//         console.log('Contenido agregado...');

//         await fs.unlink(filePath);
//         console.log('Archivo eliminado...');

        
//     } catch (error) {
//         console.log(error);
//     }
// }

// manageFiles()

// const buffer = Buffer.from('Hola mundo');
// console.log(buffer);

// Cada numero representa un byte en formato hexadecimal







