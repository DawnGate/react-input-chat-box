const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config')
const path = require('path')

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve('dist'),
        },
        hot: true,
        compress: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
})
