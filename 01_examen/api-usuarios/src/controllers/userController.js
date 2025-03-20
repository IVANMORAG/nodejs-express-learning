class UserController {
    constructor(userService) {
      this.userService = userService;
    }
  
    getAllUsers = async (req, res) => {
      try {
        const users = await this.userService.getAllUsers();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
  
    getUserById = async (req, res) => {
      try {
        const user = await this.userService.getUserById(req.params.id);
        if (!user) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
  
    createUser = async (req, res) => {
      try {
        const user = await this.userService.createUser(req.body);
        res.status(201).json(user);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };
  
    updateUser = async (req, res) => {
      try {
        const user = await this.userService.updateUser(req.params.id, req.body);
        if (!user) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };
  
    deleteUser = async (req, res) => {
      try {
        const user = await this.userService.deleteUser(req.params.id);
        if (!user) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
  }
  
  module.exports = UserController;
  