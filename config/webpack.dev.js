var webpackMerge = require('webpack-merge');
var path = require('path');
var commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        colors: true,
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 3000,
        stats: 'minimal'
    }
});