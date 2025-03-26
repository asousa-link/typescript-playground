import express, { type Request, type Response } from "express";
import { addTodo } from "../data.js";

const router = express.Router();

function handlePostTodos(req: Request, res: Response) {
  const text = req.body.text;

  const addedTodo = addTodo(text);

  res.json({ message: "Todo added!", todo: addedTodo });
}

router.post("/todos", handlePostTodos);

export default router;
