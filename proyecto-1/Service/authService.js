const {users} = require("../Data/users.js");

// Funcion para poner ruta
// get --> /get-users

const getAllUsers = () => {
    return users;
}

const login = (username, password)=>{
    var token = "";
    //TODO: Validar USUARIO
    if(getUserByNameAndPwd(username, password)){
    return token;
    }
    return "usuario o contraseña incorrectos";
}

const getUserByNameAndPwd = (username, password) =>{
    return users.find(usr=>usr.username === username && usr.password === password);
}

module.exports = {getAllUsers,login}