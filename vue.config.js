module.exports = {
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8081/',
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}