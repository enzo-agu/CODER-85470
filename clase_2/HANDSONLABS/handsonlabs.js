const suma = (a,b) =>{
    return new Promise ((resolve,reject)=>{
        if(a=== 0 || b === 0){
            reject('Operación innecesaria');
        }
        else if(a+b < 0){

            reject('La calculadora solo debe devolver valores positivos');

        }

        else{
            resolve (a+b)
        }
    })
}

const resta = (a,b) =>{
    return new Promise ((resolve,reject)=>{
        if(a=== 0 || b === 0){
            reject('Operación inválida');
        }
        else if(a-b < 0){
            reject('La calculadora solo debe devolver valores positivos');
        }

        else{
            resolve (a-b)
        }
    })

}

const multiplicacion = (a,b) =>{
    return new Promise ((resolve,reject)=>{
        if(a < 0 || b < 0){
            reject('La calculadora sólo puede devolver valores positivos');
        }
        else{
            resolve (a*b)
        }
    })

}

const division = (a,b) =>{
    return new Promise ((resolve,reject)=>{
        if(b === 0){
            reject('No se puede dividir por cero');
        }
        else{
            resolve (a/b)
        }
    })

}


const calculos = async () => {
    try {
        
        console.log(await suma(5,5));
        console.log(await resta(10,3));
        console.log(await multiplicacion(4,2));
        console.log(await division(30,2));
        
    } catch (error) {
        console.log(error);
    }
}

calculos()


