import { Router } from "express";

const router = Router();
const pets = []; // Array interno para mascotas

// GET

router.get("/", (req, res) => {
  res.json({ pets });
});

// POST
router.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Nombre e email son requeridos" });
  }

  pets.push({ name, email });

  res.status(201).json({ message: "Mascota agregada", name, email });
});

export default router;
