const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: "development",
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
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
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    }
}