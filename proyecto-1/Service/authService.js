const login = async (username, password) => {
    // Actualizamos la URL para apuntar al servicio de usuarios en el puerto 3000
    const URL_USER_SERVICE = "http://localhost:3000/users/username/"

    try {
        // Recibir respuesta del ENDPOINT
        const response = await fetch(URL_USER_SERVICE + username);
        
        if (response.status == 200) {
            const user = await response.json();

            // Verificación de credenciales
            // Nota: En producción, deberías usar bcrypt para comparar contraseñas hash
            if (user.username === username && user.password === password) {
                return {
                    status: 200,
                    token: "token-falso-" + user._id
                };
            } else {
                return {
                    status: 403,
                    message: "Usuario no autorizado, credenciales inválidas"
                };
            }
        } else {
            return {
                status: 404,
                message: "Usuario no encontrado"
            };
        }
    } catch (error) {
        return {
            status: 500,
            message: error.message
        }
    }
}

module.exports = {
    login
}