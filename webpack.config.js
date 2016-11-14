var Webpack = require("webpack");
module.exports = {
    entry: ["./widgets/app.jsx"],
    output: {
        path: __dirname,
        filename: "./assets/bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}