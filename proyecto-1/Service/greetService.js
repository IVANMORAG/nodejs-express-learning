const greet = (userId) => {
    return { message: `Saludo protegido para el usuario con ID: ${userId}` };
  };
  
  module.exports = { greet };