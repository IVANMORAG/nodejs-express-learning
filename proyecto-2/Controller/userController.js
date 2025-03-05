const { getAllUsers, getUserById, getUserByUsername, updateUser, deleteUser, createUser } = require("../Service/userService.js");

const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los usuarios", error });
    }
};

const getUserByIdController = async (req, res) => {
    const user = await getUserById(req.params.id);
    if (user) return res.json(user);
    res.status(404).json({ message: "Usuario no encontrado" });
};

const getUserByUsernameController = async (req, res) => {
    const user = await getUserByUsername(req.params.username);
    if (user) return res.json(user);
    res.status(404).json({ message: "Usuario no encontrado" });
};

const createUserController = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: "Error al crear el usuario", error });
    }
};

const updateUserController = async (req, res) => {
    const user = await updateUser(req.params.id, req.body);
    if (user) return res.json(user);
    res.status(404).json({ message: "No se pudo actualizar el usuario" });
};

const deleteUserController = async (req, res) => {
    const result = await deleteUser(req.params.id);
    if (result) return res.json({ message: "Usuario eliminado" });
    res.status(404).json({ message: "No se pudo eliminar el usuario" });
};

module.exports = { getUsers, getUserByIdController, getUserByUsernameController, createUserController, updateUserController, deleteUserController };
