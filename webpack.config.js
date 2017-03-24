var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve('./build'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080,
        contentBase: './build'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                exclude: '/node_modules'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ]
}