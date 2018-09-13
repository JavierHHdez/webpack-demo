module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: __dirname + "/dist/js", // or path: path.join(__dirname, "dist/js"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['*', '.js']
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    },
    module: {
        rules: [
           {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
           }
        ]
     }
};