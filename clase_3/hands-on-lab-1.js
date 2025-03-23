const crypto = require('crypto');

class UsersManager {
    // Atributo estático para almacenar los usuarios
  static Usuarios = [];   

    // Método para crear un nuevo usuario

    static crearUsuario({nombre,apellido,nombreUsuario,contrasenia}){
        // Hashear la contraseña usando crypto.
        const hash = crypto.createHash('sha256').update(contrasenia).digest('hex');

        // Crear un nuevo usuario
        const usuario = {
            nombre,
            apellido,
            nombreUsuario,
            contrasenia: hash
        };

        UsersManager.Usuarios.push(usuario);
        console.log('Usuario creado con éxito');
    }

    static mostrarUsuarios (){
        if(UsersManager.Usuarios.length === 0){
            console.log('No hay usuarios registrados');
     } 

     else{
        console.log('Usuarios registrados: ');
        UsersManager.Usuarios.forEach(usuario => {
            console.log(`Nombre: ${usuario.nombre} ${usuario.apellido}, Nombre de usuario: ${usuario.nombreUsuario}`);
        }); 

     }
    }


    // Método para validar  si un usuario existe y la contraseña es correcta

    static validarUsuario(nombreUsuario, contrasenia){

        const usuario = UsersManager.Usuarios.find(usuario => usuario.nombreUsuario === nombreUsuario);

        if(!usuario){
            console.log('Usuario no encontrado ❌');
            return;
        }


        const hash = crypto.createHash('sha256').update(contrasenia).digest('hex');

        if(hash === usuario.contrasenia){
            console.log('Logueado ✅');
        }else{
            console.log('La contraseña no coincide. ⛔');
        }

    }

}

UsersManager.crearUsuario({
    nombre: 'Juan',
    apellido: 'Perez',
    nombreUsuario: 'juanPerez',
    contrasenia: '123456'
});

UsersManager.crearUsuario({
    nombre: 'Marcio',
    apellido: 'Montivero',
    nombreUsuario: 'MMontivero',
    contrasenia: 'no.cambiar'
})

UsersManager.mostrarUsuarios();

UsersManager.validarUsuario('juanPerez', '123456');
UsersManager.validarUsuario('MMontivero', 'mhbmhbbhb');
UsersManager.validarUsuario('sinNombre', 'no.cambiar');