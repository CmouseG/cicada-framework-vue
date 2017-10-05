module.exports = {
    dev: {
        env: require('./dev.env'),
        port: process.env.PORT
            ? process.env.PORT
            : '8080',
        // assetsPublicPath: '/dev/',
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        cssSourceMap: false
    }
}