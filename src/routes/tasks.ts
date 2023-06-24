import express from "express";
import * as taskServices from "../services/tasks";
import toNewTask from "../utils/utils";

const router = express.Router();

router.get("/", (_, res) => {
  res.send(taskServices.getTasks());
});

router.get("/:id", (req, res) => {
  const task = taskServices.findById(+req.params.id);

  return (task !== null)
    ? res.send(task)
    : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    const newTask = toNewTask(req.body);

    const addedTask = taskServices.addTask(newTask);

    res.json(addedTask);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

export default router;
