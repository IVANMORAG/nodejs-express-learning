const router = require("express").Router()
const {getUsers, loginController} = require("../Controller/authController")

router.get("/users", getUsers);
router.post("/login", loginController)

module.exports = router;