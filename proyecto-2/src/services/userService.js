const userRepository = require('../repositories/userRepository');
const UserDTO = require('../dto/userDTO');

// Implementa el principio de inversión de dependencias (D en SOLID)
// Depende de abstracciones (repositorio) no de implementaciones concretas
class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  // Crear nuevo usuario
  async createUser(userData) {
    // Validación de lógica de negocio
    const existingUser = await this.repository.findByUsername(userData.username);
    if (existingUser) {
      throw new Error('El nombre de usuario ya existe');
    }

    const user = await this.repository.create(userData);
    return UserDTO.fromEntity(user);
  }

  // Obtener todos los usuarios
  async getAllUsers() {
    const users = await this.repository.findAll();
    return UserDTO.fromEntityArray(users);
  }

  // Obtener usuario por username
  async getUserByUsername(username) {
    const user = await this.repository.findByUsername(username);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    return UserDTO.fromEntity(user);
  }

  // Obtener usuario por ID
  async getUserById(id) {
    const user = await this.repository.findById(id);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    return UserDTO.fromEntity(user);
  }

  // Actualizar usuario
  async updateUser(id, userData) {
    // Verificar que el usuario existe
    await this.getUserById(id);
    
    // Si se intenta cambiar el username, verificar que no exista ya
    if (userData.username) {
      const existingUser = await this.repository.findByUsername(userData.username);
      if (existingUser && existingUser._id.toString() !== id) {
        throw new Error('El nombre de usuario ya está en uso');
      }
    }

    const updatedUser = await this.repository.update(id, userData);
    return UserDTO.fromEntity(updatedUser);
  }

  // Eliminar usuario
  async deleteUser(id) {
    // Verificar que el usuario existe
    await this.getUserById(id);
    
    await this.repository.delete(id);
    return { message: 'Usuario eliminado correctamente' };
  }
}

module.exports = new UserService(userRepository);