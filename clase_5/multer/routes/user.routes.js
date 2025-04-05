import { Router } from "express";
import { uploader } from "../utils/utils.js";

export const router = Router();

const users = [];

// SIN IMAGEN ✅

// router.get('/', (req,res)=>{
//     res.send({status : "success", payload : users})
// })

// CON IMAGEN ✅

router.get('/',(req,res)=>{

    let html = `
    
    <h1>Lista de usuarios</h1>
    <ul>
    
    `;


    users.forEach(user=>{

        html +=`
        <li>
          <p><strong>Nombre : ${user.name}</strong></p>
          <p><strong>edad : ${user.age}</strong></p>
          <img src="${user.file}" style="max-width:200px; height:auto;" >
        </li>
        
        `

    })

    html +=`
    
    </ul>
    
    `;

    res.send(html)



})

router.post('/upload', uploader.single("file"), (req,res)=>{

    if(!req.file){
        return res.status(400).send('No subió el archivo');
    }

    console.log(req.file);

    const user = {
        name : req.body.name,
        age : req.body.age,
        file : `/img/${req.file.filename}`
    };

    users.push(user);

    res.send('Archivo subido correctamente')

})