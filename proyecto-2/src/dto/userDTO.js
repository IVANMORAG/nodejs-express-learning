// DTO (Data Transfer Object) para usuarios
class UserDTO {
    constructor({ _id, username, email, name, createdAt, updatedAt }) {
      this._id = _id;
      this.username = username;
      this.email = email;
      this.name = name;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  
    // Método para convertir de entidad a DTO
    static fromEntity(user) {
      return new UserDTO(user);
    }
  
    // Método para convertir array de entidades a array de DTOs
    static fromEntityArray(users) {
      return users.map(user => UserDTO.fromEntity(user));
    }
  
    // Método para convertir de DTO a entidad (para crear/actualizar)
    toEntity() {
      return {
        username: this.username,
        email: this.email,
        name: this.name
      };
    }
  }
  
  module.exports = UserDTO;