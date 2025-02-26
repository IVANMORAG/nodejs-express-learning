const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const router = express.Router();

// Validaciones compartidas
const userValidations = [
  body('username').optional().isLength({ min: 3 }).withMessage('El username debe tener al menos 3 caracteres'),
  body('email').optional().isEmail().withMessage('El email debe ser válido'),
  body('name').optional().notEmpty().withMessage('El nombre es requerido')
];

// Rutas para usuarios
router.post('/', [
  body('username').isLength({ min: 3 }).withMessage('El username debe tener al menos 3 caracteres'),
  body('email').isEmail().withMessage('El email debe ser válido'),
  body('name').notEmpty().withMessage('El nombre es requerido')
], userController.createUser);

router.get('/', userController.getAllUsers);
router.get('/username/:username', userController.getUserByUsername);
router.get('/:id', userController.getUserById);
router.put('/:id', userValidations, userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;