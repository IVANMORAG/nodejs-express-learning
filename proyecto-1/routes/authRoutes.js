const router = require("express").Router();

const {getUsers,loginController, createUserController} = require("../Controller/authController");


router.post("/login",loginController);

module.exports = router;