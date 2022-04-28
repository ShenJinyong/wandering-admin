const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/wandering/v1',
        createProxyMiddleware({
            target:'http://localhost:8888/wandering/v1',
            changeOrigin:true
        })
    )
}