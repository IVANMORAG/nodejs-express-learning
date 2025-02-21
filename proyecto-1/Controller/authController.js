// authController.js
const { getAllUsers, login } = require("../Service/authService");

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const respuesta = await login(username, password);
    
    if (respuesta.token) {
      res.json({ token: respuesta.token });
    } else {
      res.status(401).json({ message: respuesta.message });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, loginController };