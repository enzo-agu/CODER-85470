import { Router } from "express";

const router = Router();
const users = []; // Array interno para mascotas

// GET

router.get("/", (req, res) => {
    res.json({ users });
  });

  // POST
router.post("/", (req, res) => {
    const { name, email } = req.body;
  
    if (!name || !email) {
      return res.status(400).json({ message: "Nombre e email son requeridos" });
    }
  
    users.push({ name, email });
  
    res.status(201).json({ message: "Usuario/a agregado/a", name, email });
  });
  
  export default router;