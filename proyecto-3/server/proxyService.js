const { createProxyMiddleware } = require('http-proxy-middleware');

class ProxyService {
  static createProxy(target) {
    return createProxyMiddleware({
      target: target,
      changeOrigin: true,
      pathRewrite: (path, req) => path.replace(req.baseUrl, ""),
      onProxyReq: (proxyReq, req, res) => {
        // Si hay un cuerpo en la petición y es JSON
        if (req.body && Object.keys(req.body).length) {
          // Convertir el cuerpo a string
          const bodyData = JSON.stringify(req.body);
          
          // Actualizar los headers de Content-Type y Content-Length
          proxyReq.setHeader('Content-Type', 'application/json');
          proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
          
          // Escribir el cuerpo en la petición proxy
          proxyReq.write(bodyData);
         
        }
      }
    });
  }
}

module.exports = ProxyService;