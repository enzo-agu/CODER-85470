// Dynamic import 

let modo = 'calculos';

const calculadora = async ()=>{

    if(modo === 'calculos'){
        const {default:Calculadora} = await import('./calculadora.js')

        let calculadoraCientifica = new Calculadora

        console.log(calculadoraCientifica.resta(20,10));
    }

}

calculadora()