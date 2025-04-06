const express = require('express');
const router = express.Router();
const gatewayRoutes = require('./gateway.routes');

// Usar las rutas del gateway
router.use('/', gatewayRoutes);

module.exports = router;