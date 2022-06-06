const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        clean: true,
        environment: {
            arrowFunction: false,
        },
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, './build'),
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        }),
    ]
}