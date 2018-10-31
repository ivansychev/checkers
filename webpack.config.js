const path = require('path');
const autoprefixer = require('autoprefixer');
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode : devMode ? 'development' : 'production',
    entry: { main: './src/index.jsx' },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[chunkhash].js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: "pre",
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    emitWarning: true,
                    configFile: "./.eslintrc.json"
                }
            },
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    //@TODO move to .babelrc
                    presets: [
                        ["@babel/env", {
                            "targets": {
                                "browsers": "last 2 Chrome versions",
                                "node": "current"
                            }
                        }],
                        "@babel/react"
                    ],
                    plugins: [
                        "react-hot-loader/babel"
                    ]
                }
            },
            {
                test: /\.css$/,
                use:  [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist', {} ),
        //new MiniCssExtractPlugin({filename: 'style.[contenthash].css'}),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new WebpackMd5Hash()
    ]
};