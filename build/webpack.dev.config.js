var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpackBaseConfig = require('./webpack.base.config')
var utils = require('./utils')
var config = require('../config')

// Helpers
const resolve = file => path.resolve(__dirname, file)

module.exports = merge(webpackBaseConfig, {
    entry: ['./dev/index.js'],
    // output: {
    //     path: resolve(__dirname, '../dev'), // The output directory as an absolute path
    // },
    devtool: '#cheap-module-eval-source-map',
    devServer: {
        port: config.dev.port,
        contentBase: resolve('../dev') // Tell the server where to serve content from
    },
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': '"development"'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'dev/index.html',
            inject: true
        })
    ]
})