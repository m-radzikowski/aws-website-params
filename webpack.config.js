const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: false,
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
        }),
    ],
    performance: {
        hints: false,
    },
};
