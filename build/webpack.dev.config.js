// import path from'path'
// import webpack from 'webpack' // don't take effect:SyntaxError: Unexpected token import
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Helpers
const resolve = file => path.resolve(__dirname, file)
const extractPlugin = ExtractTextPlugin.extract({
    use: ['css-loader', { loader: 'postcss-loader', options: { sourceMap: true } }, 'stylus-loader']
})

module.exports = {
    entry: ['./dev/index.js'],
    devtool: '#cheap-module-eval-source-map',
    output: {
        filename: '[name].js', // if set main.js otherwise bundle.js 
        // path: resolve('../dev'), // The output directory as an absolute path
        publicPath: '/dev/' // The bundled files will be available in the browser under this path.By default the publicPath is "/"
    },
    devServer: {
        contentBase: resolve('../dev') // Tell the server where to serve content from
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
        new webpack.DefinePlugin({
            'process.env': '"development"'
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ]
}
