import express from 'express';
import PM from './ProductManager.js';

const app = express();

const PORT = 8080;

const ProductManager = new PM('./products.json') 

app.use(express.json())

app.get('/products', async (req,res)=>{
    try {

        const products = await ProductManager.getProducts();
        res.json({products})
        
    } catch (error) {

        res.status(500).json({error: 'Error al obtener productos'})
        
    }
})

app.get('/products/:id', async (req,res)=>{

    const productId = parseInt(req.params.id)


    try {

        const product = await ProductManager.getProductById(productId)

        if(!product){
            return res.status(404).json({error:'Producto no encontrado'})
        }

        res.json(product)

        
    } catch (error) {

        res.status(500).json({error: 'Error al obtener productos'})
        
    }
})


app.post('/products', async(req,res)=>{
    try {

        const newProduct = await ProductManager.addProduct(req.body);
        res.status(201).json({message:'Producto agregado', product: newProduct})
        
    } catch (error) {

        res.status(400).json({error: error.message})
        
    }
})


app.put('/products/:pid', async (req,res)=>{

    const productId = parseInt(req.params.pid);

    try {

        const updateProduct = await ProductManager.updateProduct(productId, req.body);
        res.json({message:'Producto actualizado', product: updateProduct})
        
    } catch (error) {

        res.status(404).json({error: error.message})
        
    }

})

app.delete('/products/:pid', async (req,res)=>{

    const productId= parseInt(req.params.pid);

    try {

        await ProductManager.deleteProductById(productId);
        res.json({message:`Producto con ID ${productId} eliminado`})
        
    } catch (error) {

        res.status(404).json({error:error.message})
        
    }

})


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
