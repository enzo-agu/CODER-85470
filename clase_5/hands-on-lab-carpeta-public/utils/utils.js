import path from 'path'; // modulo path sirve para trabajar con rutas de aechivos y directorios de Node.js
import { fileURLToPath } from 'url'; // modulo url sirve para trabajar con URLS en Node.js

const __filename = fileURLToPath(import.meta.url);// convertir una URL de archivo en una ruta de archivo local.
const __dirname = path.dirname(__filename); // dirname obtiene el nombre del doirectorio que contiene el archivo actual-


export default __dirname;