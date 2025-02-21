// middlewares/authMiddleware.js
const validarToken = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(403).json({ message: "Acceso denegado por falta de token de autorización" });
  }
  
  if (token.startsWith("token-falso-")) {
    return next();
  } else {
    return res.status(403).json({ message: "Token de autorización inválido" });
  }
};

module.exports = { validarToken };