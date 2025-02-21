const { users } = require("../Data/users.js");

const getAllUsers = () => {
  return users;
};

const login = (username, password) => {
  const user = getUserByNameAndPwd(username, password);
  
  if (user) {
    return { token: `token-falso-${user.id}` };
  }
  
  return { message: "Usuario o contraseña incorrectos" };
};

const getUserByNameAndPwd = (username, password) => {
  return users.find(usr => usr.username === username && usr.password === password);
};

module.exports = { getAllUsers, login };