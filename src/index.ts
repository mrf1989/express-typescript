import express from "express";

import taskRouter from "./routes/tasks";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ping", (req, res) => {
  console.log(`[${new Date().toLocaleDateString()} - ${req.method} ${req.path}]: Requesting ping`);
  res.send("pong");
});

app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
