var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
        app: './src/app/main.ts'
    },

    resolve: {
        root: path.join(__dirname, '../src'),
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ['node_modules']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            { test: /\.html$/, loader: 'html' }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'dist/index.html',
            inject: true,
            hash: true,
            chunksSortMode: 'dependency'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'polyfills', 'vendor']
        })
    ]
};