const {promises:fs} = require('fs');

class UsersManager {
    constructor(archivo = 'Usuarios.json'){
        this.archivo = archivo;
    }

    async crearUsuario (usuario){

        let usuarios = await this.leerUsuarios(); 
        usuarios.push(usuario);

        await fs.writeFile(this.archivo, JSON.stringify(usuarios, null, 2), 'utf-8');
        console.log('Usuario creado con éxito');
    }

    // Metodo para consultar los usuarios

    async consultarUsuarios(){
        return await this.leerUsuarios();
    }

    async leerUsuarios(){
      return fs.readFile(this.archivo, 'utf-8')
        .then(data => JSON.parse(data))
        .catch(() => []);
    }   

}


module.exports = UsersManager;