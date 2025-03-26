import express, { type Request, type Response } from "express";
import { addTodo, getTodo, getTodos, removeTodo, updateTodo } from "../data.js";

const router = express.Router();

function handlePostTodos(req: Request, res: Response) {
  const text = req.body.text;

  const addedTodo = addTodo(text);

  res.json({ message: "Todo added!", todo: addedTodo });
}

router.post("/todos", handlePostTodos);

router.get("/todos", (req, res) => {
  const todos = getTodos();
  res.json({ todos });
});

router.get("/todos/:id", (req, res) => {
  const todo = getTodo(+req.params.id);
  res.json({ todo });
});

router.patch("/todos/:id", (req, res) => {
  const updatedTodo = updateTodo(+req.params.id, req.body.text);
  res.json({ message: "Todo updated!", todo: updatedTodo });
});

router.delete("/todos/:id", (req, res) => {
  removeTodo(+req.params.id);
  res.json({ message: "Todo deleted!" });
});

export default router;
