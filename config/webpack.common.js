var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
        app: './src/main.ts'
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
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            { test: /\.html$/, loader: 'html' },
            { test: /\.less/, loaders: ['raw', 'less'] },
            { test: /\.css/, loaders: ['style', 'css'] }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'polyfills', 'vendor']
        }),

        new HtmlWebpackPlugin({
            template: 'dist/index.html',
            inject: true,
            hash: true,
            chunksSortMode: 'dependency'
        })
    ]
};