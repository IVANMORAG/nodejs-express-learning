const validarToken = (req,res,next)=>{
  const token = req.headers.authorization;
  if (token) {
      if(token.startsWith("token-falso-"))
          next();
      else
      res.status(403).json({message:"Acceso denegado por token invalido"});
  }else{
      res.status(403).json({message:"Acceso denegado por falta de token de autorizacion"})
  }
}


module.exports = {validarToken}