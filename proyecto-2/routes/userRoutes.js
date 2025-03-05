const router = require("express").Router();
const { getUsers, getUserByIdController, getUserByUsernameController, createUserController, updateUserController, deleteUserController } = require("../Controller/userController");

router.get("/", getUsers);
router.get("/:id", getUserByIdController);
router.get("/username/:username", getUserByUsernameController);
router.post("/signup", createUserController); // Nueva ruta para crear un usuario
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

module.exports = router;
