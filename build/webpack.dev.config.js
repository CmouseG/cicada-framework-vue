var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base.config')
var utils = require('./utils')
var config = require('../config')

// Helpers
const resolve = file => path.resolve(__dirname, file)

module.exports = merge(webpackBaseConfig, {
    entry: ['./dev/index.js'],
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
        })
    ]
})