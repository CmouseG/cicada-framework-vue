// import path from'path'
// import webpack from 'webpack' // don't take effect:SyntaxError: Unexpected token import
const path = require('path')
const webpack = require('webpack')
const extractTextPlugin = require('extract-text-webpack-plugin')

// Helpers
const resolve = file => path.resolve(__dirname, file)
const extractPlugin = extractTextPlugin.extract({
    use: ['css-loader', 'postcss-loader', 'stylus-loader']
})

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
        extensions: ['*', '.js', '.json', '.vue'],
        alias: {
            cicada: resolve('../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader']
                // exclude: /node_modules/ // can't enable, otherwise don't take effect
            },
            {
                test: /\.vue$/,
                loaders: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            stylus: extractPlugin
                        }
                    }
                }, 'eslint-loader']
                // exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                loaders: extractPlugin
            }
        ]
    },
    plugins: [
        new extractTextPlugin({
            filename: '[name].css'
        })
    ]
}