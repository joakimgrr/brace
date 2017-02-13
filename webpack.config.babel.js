import webpack from 'webpack';
import path from 'path';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },

            {
                test: /\.html$/,
                loader: 'file-loader',
                options: {
                    name: '[name].html'
                }
            }
        ]
    },

    devServer: {
        port: process.env.PORT || 8080,
        host: 'localhost',
        publicPath: '/',
        contentBase: './src'
    }
}
