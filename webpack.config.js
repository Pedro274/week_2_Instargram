var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ],
    ,
    entry: 'index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()]
};