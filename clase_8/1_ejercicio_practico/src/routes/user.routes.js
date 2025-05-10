import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
  deleteUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteUser)

export default router;
