import { Router } from "express";
import { registerUser, loginUser } from "../controllers/userController";

const router = Router();

router.post("/users", registerUser);
router.post("/users/login", loginUser);

export default router;