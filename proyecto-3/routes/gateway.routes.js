const routes = require("express").Router();
const ProxyService = require("../server/proxyService");
const {services} = require("../config/services");

services.forEach(({url,path})=>{
    //app.use("/",(req,res)=>{})
        routes.use(path,ProxyService.createProxy(url))
})


module.exports = routes;