// TIPOS DE DATOS 🚀

// let name="Thiago";
// let id =1;
// let booleanFalse=false;
// let datoNull=null;
// let datoUndefined=undefined;
// let booleanTrue=true;

// const anioActual=2025
// console.log(anioActual, name, id, booleanFalse, booleanTrue);
// console.error('Error')
// console.warn('warn')
// console.clear()


// OBJETOS 🚀

// let user={
//     nombre:'Thiago',
//     id:1
// }

// const user2={
//     nombre:'Romina',
//     id:2
// }

// console.log(user2.nombre);

// user2.nombre='Yamila'
// console.log(user2.nombre);



// ARRAY 🚀 
// const values = [true, false, 2222, ()=>{}, null, undefined];

// const products=[
//     { id:1, name:"Laptop",price:500, quantity:2 },
//     { id:2, name:"Mouse",price:300, quantity:6 },
//     { id:3, name:"Teclado",price:900, quantity:7 },
// ]

// console.log(products);



// FUNCIONES 🚀

const students=['Florencia', 'Gian']


function addStudent(name){
    const id= students.length + 1 // id es local, no exsite por fuera de la función.
    students.push({id, name})
    console.log(`Alumno ${name} agregado exitosamente con ID ${id}`);

}

// addStudent('Oscar')
// addStudent('Leonardo')

function deleteStudentById(id){
    const index= students.findIndex((student)=> student.id === id);

    if(index === -1) return console.error(`No se encontró el alumno de ID ${id}`);

    students.splice(index,1);
    console.log(students);

}

// deleteStudentById(3)



// const showStudents = () => console.log(students);


// showStudents()