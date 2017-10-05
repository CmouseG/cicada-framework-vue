// import path from'path'
// import webpack from 'webpack' // don't take effect:SyntaxError: Unexpected token import
var path = require('path')
var config = require('../config')
var utils = require('./utils')
var vueLoaderConfig = require('./vue-loader.config')

// Helpers
var resolve = file => path.resolve(__dirname, file)
// var extractPlugin = ExtractTextPlugin.extract({
//     use: ['css-loader', { loader: 'postcss-loader', options: { sourceMap: true } }, 'stylus-loader']
// })

module.exports = {
    output: {
        filename: '[name].[hash:7].js', // if set main.js otherwise bundle.js 
        // The bundled files will be available in the browser under this path.By default the publicPath is "/"
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['*', '.js', '.json', '.vue'],
        alias: {
            cicada: resolve('../src'),
            'vue$': 'vue/dist/vue.esm.js'
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
                    options: vueLoaderConfig
                }, 'eslint-loader']
                // exclude: /node_modules/
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [

    ]
}
