class ProductManager{
    constructor(){
        this.products = [];
        this.nextId= 1;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        // VALIDAR QUE TODOS LOS CAMPOS SEAN OBLIGATORIOS

        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error('Todos los campos son obligatorios');
            return;
        }

        // VALIDAR QUE EL CODIGO NO SE REPITA 
        if(this.products.some(product => product.code === code)){
            console.error(`El código ${code} ya está en uso ⛔`)
            return;
        }

        // CREAMOS EL NUEVO PRODUCTO 

        const newProduct = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.products.push(newProduct)
        console.log('Producto agregado ✅');
    }

    getProducts(){
        // PARSEAR LA DATA
        return `👉 Productos ${JSON.stringify(this.products)}`
    }

    getProductById(id){
        const product = this.products.find(prod => prod.id === id );
        if(!product){
            console.error(`ID : 👉 ${id} no encontrado ❌`)
        }
        return `${JSON.stringify(product)}`
    }

}

const manager = new ProductManager()
manager.addProduct('Samsung', 'Galaxy A13', 600000, 'image', 'A13', 5);
manager.addProduct('Nubia', 'A 200', 200000, 'image', 'A--200', 20);
console.log(manager.getProducts());
console.log(manager.getProductById(1));
console.log(manager.getProductById(100));
