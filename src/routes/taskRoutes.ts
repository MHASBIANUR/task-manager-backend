import { Router } from "express";
import {
  createTask,
  getAllTasks,
  getMyTasks,
  getTaskById,
  updateTask,
  deleteTask,
  getTasksByUserId
} from "../controllers/taskController";

import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/tasks", authMiddleware, createTask);
router.get("/tasks", getAllTasks);
router.get("/tasks/my-tasks", authMiddleware, getMyTasks);
router.get("/tasks/:id", getTaskById);
router.put("/tasks/:id", authMiddleware, updateTask);
router.delete("/tasks/:id", authMiddleware, deleteTask);
router.get("/users/:id/tasks", getTasksByUserId);

export default router;