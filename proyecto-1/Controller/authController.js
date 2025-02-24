const {getAllUsers, login, createUser} = require("../Service/authService");

const getUsers = async (req,res)=>{
    const users = await getAllUsers(); 
    res.json(users);
}

const loginController = async (req,res)=>{
    const {username,password} = req.body;
    const respuesta = await login(username,password);
    const {token} = respuesta;
    const {message} = respuesta;

    if (token) 
        res.json({token});
    else
        res.status(401).json({message});
}


const createUserController = async (req,res)=>{
    const {username,password} = req.body;
    const newUser = await createUser(username,password);
    if (newUser){
        res.status(201).json(newUser);
    }else{
        res.status(500).json({message:"DB not connected"})
    }
}

module.exports = {getUsers,loginController,createUserController}