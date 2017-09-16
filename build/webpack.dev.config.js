// import path from'path'
// import webpack from 'webpack' // don't take effect:SyntaxError: Unexpected token import
const path = require('path')
const webpack = require('webpack')

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
    },
    resolve: {
        alias: {
            cicada: resolve('../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader', 'eslint-loader']
                // exclude: /node_modules/ // can't enable, otherwise don't take effect
              }
        ]
    },
    plugins: [
        
    ]
}