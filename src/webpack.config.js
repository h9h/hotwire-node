const path = require("path")

module.exports = {
    entry: {
        bundle: "./src/stimulus.js"
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public")
    },

    mode: "production",
    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/
                ],
                use: [
                    { loader: "babel-loader"}
                ]
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }            
        ]
    }, 
    resolve: {
        extensions: ['.ts', '.js']
    }
}