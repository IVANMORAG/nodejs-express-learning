class UserService {
    constructor(UserModel) {
      this.User = UserModel;
    }
  
    async getAllUsers() {
      return await this.User.find();
    }
  
    async getUserById(id) {
      return await this.User.findById(id);
    }
  
    async createUser(userData) {
      return await this.User.create(userData);
    }
  
    async updateUser(id, userData) {
      return await this.User.findByIdAndUpdate(id, userData, { new: true });
    }
  
    async deleteUser(id) {
      return await this.User.findByIdAndDelete(id);
    }
  }
  
  module.exports = UserService;