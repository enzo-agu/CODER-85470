// EJEMPLO 1 EXPONENTIAL 🚀
// Eleva un valor base a un exponente dado.
// let valoresBase = [1,2,3,4,5,6]
// let nuevosValores= valoresBase.map((numero,indice)=>{
//    console.log(`El número ${numero} elevado a la potencia ${indice} es = 👉 ${numero**indice}`)
// })



// EJEMPLO 2 INCLUDES 🚀
// Verifica que un elemento exista dentro del array.

// let nombres = ['Juan', 'Camilo', 'Maria', 'Ana', 'Humberto'];
// if(nombres.includes('Camilo')){
//     console.log('Existe en el array');
// }
// else{
//     console.log('No existe en el array');
// }



// EJEMPLO 3 OBJECT.ENTRIES() 🚀
// Devuelve un array de pares [clave, valor] de un objeto.

// const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };

// console.log(Object.entries(persona));

// RECORREMOS CON UN FOREACH 👇
// Object.entries(persona).forEach(([clave, valor]) => {
//   console.log(`${clave}: ${valor}`);
// });


// const carrito = {
//     notebook: 1,
//     mouse: 2,
//     teclado: 1,
//     monitor: 1
//   }

  // console.log( Object.entries(carrito) )

  // RECORREMOS CON UN FOREACH 👇
  // Object.entries(carrito).forEach(([clave, valor]) => {
  //   console.log(`${clave}: ${valor}`);
  // });



// EJEMPLO 4 OBJECT.KEYS() 🚀
// Devuelve un array con las claves del objeto.

// const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
// console.log(Object.keys(persona));

// ITERA SOBRE LAS CLAVES 👇
// Object.keys(persona).forEach(clave => {
//   console.log(clave);
// });



// EJEMPLO 5 OBJECT.VALUES() 🚀
// Devuelve un array con los valores del objeto.

// const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
// console.log(Object.values(persona));

// ITERA SOBRE LAS VALORES 👇
// Object.values(persona).forEach(valor => {
//   console.log(valor);
// });


// EJEMPLO 6 REDUCE 🚀

// const numeros = [1, 2, 3, 4, 5];

// const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

// AC = 0 ==> En la primera vuelta, luego AC es igual a lo que se va sumando con cada número del array.
// 1+ AC = 1  ==> AC == 1
// 2 + AC = 3 ==> AC == 3
// 3 + AC = 6 ==> AC == 6
// 4 + AC = 10 ==> AC == 10
// 5 + AC = 15 ==> AC == 15

// console.log(suma); // Salida: 15



// EJEMPLO 7 SPREAD 🚀

// EN ARRAYS ✅
// const numeros = [1, 2, 3];
// const copiaNumeros = [...numeros];
// console.log(copiaNumeros); 

// COMBINACION 👇
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const Arraycombinado = [...arr1, ...arr2];
// AHRRAMOS UNA LINEA 👇 SI LO HACEMOS DIRECTO EN CLG
// console.log([...arr1, ...arr2]);

// EN OBJETOS ✅

// const usuario = { nombre: "Juan", edad: 30 };
// const usuarioNuevo = { ...usuario, ciudad: "Madrid" };

// console.log(usuarioNuevo); 


// EJEMPLO 8 REST 🚀
// Se usa para agrupar elementos en un array o en los parámetros de una función.

// function sumar(...numeros) {
  // ...numeros==> reconoce todos los argumentos en un array.
  // return numeros.reduce((total, num) => total + num, 0);
// }

// console.log(sumar(1, 2, 3, 4)); 

// OTRA FORMA 👇 
// const resultado = sumar(1,2,3,4)
// console.log(resultado); 

// PARA EXTRAER PROPIEDADES DE UN OBJETO ✅

// const persona = { nombre: "Ana", edad: 25, ciudad: "Lima" };

// const { nombre, ...resto } = persona;

// console.log(nombre); 
// console.log(resto); 


// EJEMPLO 9 TRIM() 🚀

// let cadena = '        Hola mundo'
// console.log(cadena);
// console.log(cadena.trim());



// EJEMPLO 10 FLAT() 🚀 
// let arrayAnidado= [1,32,4,5,6,[1,4,5,1],[3411,3,4]]
// console.log(arrayAnidado);
// console.log(arrayAnidado.flat());


// EJEMPLO 11 NULLISH 🚀

// let valorCero=0
// console.log(valorCero || 'valor por defecto');
// console.log(valorCero ?? 'valor por defecto');



// EJEMPLO 12 VARIABLES PRIVADAS EN CLASES 🚀

// class Persona {
//   #fullname; 
//   constructor(nombre, apellido){

//     this.nombre=nombre;
//     this.apellido = apellido;
//     this.#fullname = `${this.nombre} ${this.apellido}`

//   }

//   getFullName = () =>{
//     return this.#fullname;
//   }

//   // metodo privado ()=>{}

// }

// const instancia_1 = new Persona('nombreUno' , 'apellidoUno')

// console.log(instancia_1.getFullName());
// console.log(instancia_1.fullname); // 👉 UNDEFINED





















