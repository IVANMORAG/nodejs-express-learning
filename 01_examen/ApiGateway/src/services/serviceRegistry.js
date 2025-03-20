// src/services/serviceRegistry.js
const config = require('../config/config');
const ProxyService = require('./proxyService');

class ServiceRegistry {
  constructor() {
    this.services = {};
    this.initialize();
  }

  initialize() {
    Object.keys(config.services).forEach(serviceName => {
      const serviceConfig = config.services[serviceName];
      this.services[serviceName] = new ProxyService(
        serviceConfig.url,
        serviceConfig.prefix
      );
    });
  }

  getService(name) {
    if (!this.services[name]) {
      throw new Error(`Servicio '${name}' no encontrado`);
    }
    return this.services[name];
  }
}

module.exports = new ServiceRegistry();