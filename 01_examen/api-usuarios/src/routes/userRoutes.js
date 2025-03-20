const express = require('express');
const UserController = require('../controllers/userController');
const UserService = require('../services/userService');
const User = require('../models/User');

const router = express.Router();
const userService = new UserService(User);
const userController = new UserController(userService);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;