const router = require("express").Router();
const userController = require("../controllers/user");


router.get("/", userController.login);

module.exports = router;