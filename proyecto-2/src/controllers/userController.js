const userService = require('../services/userService');

// Implementa el principio de responsabilidad única (S en SOLID)
// Se encarga exclusivamente de manejar las peticiones HTTP
class UserController {
  // Crear un nuevo usuario
  async createUser(req, res, next) {
    try {
      const userData = req.body;
      const user = await userService.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  // Obtener todos los usuarios
  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  // Obtener usuario por username
  async getUserByUsername(req, res, next) {
    try {
      const { username } = req.params;
      const user = await userService.getUserByUsername(username);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  // Obtener usuario por ID
  async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  // Actualizar usuario
  async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const user = await userService.updateUser(id, userData);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  // Eliminar usuario
  async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const result = await userService.deleteUser(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();