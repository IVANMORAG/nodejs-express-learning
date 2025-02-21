const User = require('../models/User');

// Obtener todos los usuarios
const getAllUsers = async () => {
  try {
    const users = await User.find().select('-password');
    return users;
  } catch (error) {
    throw new Error('Error al obtener usuarios');
  }
};

// Login de usuario
const login = async (username, password) => {
  try {
    const user = await User.findOne({ username, password });
    
    if (user) {
      return { token: `token-falso-${user._id}` };
    }
    
    return { message: "Usuario o contraseña incorrectos" };
  } catch (error) {
    throw new Error('Error en el proceso de login');
  }
};

module.exports = { getAllUsers, login };