// TODO FUNCIONA CORRECTAMENTE EN LA CONSOLA, EL PROBLEMA ERA QUE EL ARCHIVO "ASYNC-AWAIT.JS" NO ESTABA DENTRO DE LA CARPETA "CLASE_2", SINO QUE ESTABA EN LA RAIZ DE LA CARPETA "CODER-85470".

// EJEMPLO 1 🚀

const getProducts = async () => {

    try {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    
  };
  
  getProducts()

// EJEMPLO 2 🚀

const pedirPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()
    console.log(data);
}

// pedirPosts()



