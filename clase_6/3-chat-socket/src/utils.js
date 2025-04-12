import path from "path"; // Importamos el módulo path sirve para trabajar con rutas de archivos y directorios en Node.js.
import { fileURLToPath } from "url"; // Importamos el módulo url, que proporciona utilidades para trabajar con URLs y cadenas de URL en Node.js.


const __filename = fileURLToPath(import.meta.url); // fileURLToPath convierte una URL de archivo en una ruta de archivo local.
const __dirname = path.dirname(__filename); // dirname obtiene el nombre del directorio que contiene el archivo actual. Esto es útil para construir rutas relativas a la ubicación del archivo.

export default __dirname;
