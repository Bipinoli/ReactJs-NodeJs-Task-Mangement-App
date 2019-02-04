const router = require("express").Router();
const taskController = require("../controllers/task");

router.get("/", taskController.getTasks);
router.post("/", taskController.newTask);
router.put("/:id", taskController.editTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;