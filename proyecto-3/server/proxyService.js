const {createProxyMiddleware} = require("http-proxy-middleware")

class proxyService {

    // Crear método
    static createProxy(target){
        return this.createProxyMiddleware({
            target:target,
            changeOrigin:true,
            pathRewrites:(path, req) => path.replace(req.baseURL,"")
        })

    }
}

module.exports = {proxyService}