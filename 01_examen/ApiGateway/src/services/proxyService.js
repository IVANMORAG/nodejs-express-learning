// src/services/proxyService.js
const axios = require('axios');

class ProxyService {
  constructor(baseURL, prefix) {
    this.baseURL = baseURL;
    this.prefix = prefix;
    this.axios = axios.create({
      baseURL: this.baseURL
    });
  }

  async get(path, query) {
    try {
      const response = await this.axios.get(`${this.prefix}${path}`, { params: query });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post(path, body) {
    try {
      const response = await this.axios.post(`${this.prefix}${path}`, body);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async put(path, body) {
    try {
      const response = await this.axios.put(`${this.prefix}${path}`, body);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async patch(path, body) {
    try {
      const response = await this.axios.patch(`${this.prefix}${path}`, body);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(path) {
    try {
      const response = await this.axios.delete(`${this.prefix}${path}`);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      // Error de la API de destino
      const statusCode = error.response.status;
      const errorMessage = error.response.data.message || error.response.statusText;
      
      const customError = new Error(errorMessage);
      customError.statusCode = statusCode;
      throw customError;
    } else if (error.request) {
      // No se pudo conectar al servicio
      const customError = new Error(`No se pudo conectar al servicio en ${this.baseURL}`);
      customError.statusCode = 503;
      throw customError;
    } else {
      throw error;
    }
  }
}

module.exports = ProxyService;