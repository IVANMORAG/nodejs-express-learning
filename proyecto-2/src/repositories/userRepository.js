const User = require('../models/userModel');

// Implementa el principio de responsabilidad única (S en SOLID)
// Se encarga exclusivamente de la interacción con la base de datos
class UserRepository {
  // Crear un nuevo usuario
  async create(userData) {
    const user = new User(userData);
    return await user.save();
  }

  // Buscar todos los usuarios
  async findAll() {
    return await User.find({});
  }

  // Buscar un usuario por username
  async findByUsername(username) {
    return await User.findOne({ username });
  }

  // Buscar un usuario por ID
  async findById(id) {
    return await User.findById(id);
  }

  // Actualizar un usuario
  async update(id, userData) {
    return await User.findByIdAndUpdate(
      id, 
      { ...userData, updatedAt: Date.now() }, 
      { new: true, runValidators: true }
    );
  }

  // Eliminar un usuario
  async delete(id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();