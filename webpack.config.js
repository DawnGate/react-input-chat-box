const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].js',
        path: path.resolve('dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/i,
                exclude: [/node_modules/, /\.(spec|test).(ts|js)x?$/i],
                loader: 'babel-loader',
            },
            {
                test: /\.svg$/,
                loader: '@svgr/webpack',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            src: path.resolve('src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: true,
        }),
    ],
}
