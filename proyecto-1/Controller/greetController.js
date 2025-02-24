const {greet} = require("../Service/greetService");


const greetProtected = (req,res)=>{
    res.json(greet());
}

module.exports = {greetProtected}