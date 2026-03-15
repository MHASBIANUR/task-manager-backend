import { Request, Response } from "express";
import prisma from "../config/prisma";
import { AuthRequest } from "../middleware/authMiddleware";

// CREATE TASK
export const createTask = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        userId: req.userId!,
      },
    });

    res.status(201).json({
      message: "Task created",
      data: task,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET ALL TASKS
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        user: true,
      },
    });

    res.json({
      message: "List of tasks",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET MY TASKS
export const getMyTasks = async (req: AuthRequest, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        userId: req.userId,
      },
    });

    res.json({
      message: "My tasks",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET TASK BY ID
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json({
      message: "Task detail",
      data: task,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE TASK
export const updateTask = async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { title, description, completed } = req.body;

    const task = await prisma.task.update({
      where: { id },
      data: {
        title,
        description,
        completed,
      },
    });

    res.json({
      message: "Task updated",
      data: task,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE TASK
export const deleteTask = async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params.id);

    await prisma.task.delete({
      where: { id },
    });

    res.json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET TASKS BY USER ID
export const getTasksByUserId = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.id);

    const tasks = await prisma.task.findMany({
      where: {
        userId: userId,
      },
    });

    res.json({
      message: "User tasks",
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};