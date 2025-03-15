const getUser = new Promise ((resolve, reject)=>{

    const isLogged = false;

    setTimeout(() => {

        if(isLogged === true){
            resolve('Devolver datos del usuario')
        }
        else{
            reject('Error: usuario no logueado')
        }
    }, 2000);
})


// console.log(getUser);

getUser 
.then(resp=>console.log(resp))
.catch(err=>console.log(err))
.finally(()=>console.log('Se ejecuta por defecto'))