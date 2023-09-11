const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config')

const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(commonConfig, {
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    module: [
        {
            test: /\.css$/i,
            use: [new MiniCssExtractPlugin.loader(), 'css-loader'],
        },
    ],
})
