const logger = (req, res, next)=>{

    //Imprimer un mensaje
    console.log(`[
        ${new Date().toISOString}]
        ${req.method} 
        ${req.originalurl}
        `);

    next(); 

}

module.export = {logger}