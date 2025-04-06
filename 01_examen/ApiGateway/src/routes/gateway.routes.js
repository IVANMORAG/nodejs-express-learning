const express = require('express');
const router = express.Router();
const serviceRegistry = require('../services/serviceRegistry');
const config = require('../config/config');

// Función auxiliar para manejar las solicitudes al servicio
const handleServiceRequest = async (req, res, next, service, path) => {
  try {
    const method = req.method.toLowerCase();
    let result;
    
    switch (method) {
      case 'get':
        result = await service.get(path, req.query);
        break;
      case 'post':
        result = await service.post(path, req.body);
        break;
      case 'put':
        result = await service.put(path, req.body);
        break;
      case 'patch':
        result = await service.patch(path, req.body);
        break;
      case 'delete':
        result = await service.delete(path);
        break;
      default:
        throw new Error(`Método no soportado: ${method}`);
    }
    
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

// Middleware para crear un proxy para cada servicio
const createProxyMiddleware = (serviceName, routePath) => {
  return (req, res, next) => {
    const service = serviceRegistry.getService(serviceName);
    // Obtener la parte de la ruta después del routePath
    const path = req.url.replace(routePath, '') || '/';
    handleServiceRequest(req, res, next, service, path);
  };
};

// Definir los mappings de rutas a servicios
const routeMappings = [
  { path: '/books', service: 'books' },
  { path: '/users', service: 'users' },
  { path: '/loans', service: 'loans' }
];

// Registrar todas las rutas
routeMappings.forEach(({ path, service }) => {
  router.all(`${path}*`, createProxyMiddleware(service, path));
  router.all(path, createProxyMiddleware(service, path));
});

module.exports = router;