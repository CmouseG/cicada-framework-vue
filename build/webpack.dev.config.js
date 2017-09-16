const path = require('path')

// Helpers
const resolve = file => path.resolve(__dirname, file)

module.exports = {
    entry: ['./dev/index.js'],
    output: {
        filename: '[name].js', // if set main.js otherwise bundle.js 
        // path: resolve('../dev'), // The output directory as an absolute path
        publicPath: '/dev/' // The bundled files will be available in the browser under this path.By default the publicPath is "/"
    },
    devServer: {
        contentBase: resolve('../dev'), // Tell the server where to serve content from
    }
}