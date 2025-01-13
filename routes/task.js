const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getSingleTask,
  updateTask,
  createTask,
  deleteTask,
} = require("../controllers/task");

router.get("/", getAllTasks);
router.get("/:id", getSingleTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
