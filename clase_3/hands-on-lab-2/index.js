const UsersManager = require('./user-manager.js');

const manager = new UsersManager();

// Crear un usuario

const nuevoUsuario = {
    nombre:'Enzo',
    apellido:'Agú',
    edad:36,
    curso:'FullStack'
}

async function ejecutar() {

    try {

        await manager.crearUsuario(nuevoUsuario);
        const usuarios = await manager.consultarUsuarios();
        console.log('Usuarios registrados: ', usuarios);
        
    } catch (error) {
        console.log(error);
    }
    
}

ejecutar();