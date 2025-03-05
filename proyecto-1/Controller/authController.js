const {login} = require("../Service/authService");


const loginController = async (req, res) => {
    const { username, password } = req.body;
    const respuesta = await login(username, password); // ¡Nota el await aquí!

    if (respuesta.status === 200) {
        res.json({ token: respuesta.token });
    } else {
        res.status(respuesta.status).json({ message: respuesta.message });
    }
};



module.exports = {loginController}