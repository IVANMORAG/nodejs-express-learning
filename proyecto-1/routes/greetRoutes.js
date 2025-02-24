const router = require("express").Router();
const { validarToken } = require("../Middlewares/authMiddleware");
const {greetProtected} = require("../Controller/greetController");

router.get("/saludo-protegido",validarToken,greetProtected);

module.exports = router;