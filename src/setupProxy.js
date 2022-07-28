const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/ajax', {
            target: 'https://i.maoyan.com',
            changeOrigin: true,
        }),
        createProxyMiddleware('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {
                '^/api2': ''
            }
        })
    )
}