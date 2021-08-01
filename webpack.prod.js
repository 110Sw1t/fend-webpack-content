const path = require("path");
const webpack = require("webpack");
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
   mode: "production",
   entry: "./src/client/index.js",
   module: {
      rules: [
         {
            test: '/\.js$/',
            exclude: '/node_modules/',
            loader: 'babel-loader'
         },
         {
            test: '/src\/client\/js/',
            loader: ESLintPlugin.loader
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               // Creates `style` nodes from JS strings
               "style-loader",
               // Translates CSS into CommonJS
               "css-loader",
               // Compiles Sass to CSS
               "sass-loader",
            ],
         },
      ]
   },
   plugins: [new ESLintPlugin(), new HTMLPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html"
   })],
}