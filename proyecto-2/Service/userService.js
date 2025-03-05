const { User } = require("../models/userModel");

// Obtener todos los usuarios
const getAllUsers = async () => {
    try {
        return await User.find();
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Obtener un usuario por ID
const getUserById = async (id) => {
    try {
        return await User.findById(id);
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Obtener un usuario por nombre de usuario
const getUserByUsername = async (username) => {
    try {
        return await User.findOne({ username });
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Crear un nuevo usuario
const createUser = async (data) => {
    try {
        const user = new User(data);
        await user.save();
        return user;
    } catch (error) {
        console.error(error);
        throw new Error("Error al crear el usuario");
    }
};

// Actualizar un usuario
const updateUser = async (id, data) => {
    try {
        return await User.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Eliminar un usuario
const deleteUser = async (id) => {
    try {
        return await User.findByIdAndDelete(id);
    } catch (error) {
        console.error(error);
        return null;
    }
};

module.exports = { getAllUsers, getUserById, getUserByUsername, createUser, updateUser, deleteUser };
