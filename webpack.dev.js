const path = require("path");
const webpack = require("webpack");
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   output: {
      path: path.resolve(__dirname, 'dist'), // specify this for CleanWebpackPlugin to work and see path value
    },
   watch:true, // rebuild on file changes, used when working with server other than webpack dev server// rebuilding invokes plugins // [webpack-cli] No need to use the 'serve' command together with '{ watch: true }' configuration, it does not make sense.
   // devServer: {
   //    hot: true, // hot reloading feature
   //  },
   devtool: "eval-source-map",
   mode: "development",
   entry: "./src/client/index.js",
   module: {
      rules: [
         {
            test: '/\.js$/',
            exclude: '/node_modules/',
            loader: 'babel-loader'
         },
         {
            test: /src\/client\/js/, // If no loaders found for file extension when webpack checks imports in js files
            // It will use loader for js files
            // Always use regex without quotations for some reason with quotations regex doesnt match files

            loader: ESLintPlugin.loader
         },
         {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
         }   
      ]
   },
   plugins: [
      new ESLintPlugin(), 
      new HTMLPlugin({
         template: "./src/client/views/index.html", // Will generate index.html in dist folder, as well as 
                                                    // put script tag of generated main.js 
         filename: "./index.html" // this has to be of name "index.html" in order to make dev server work
      }),
      new CleanWebpackPlugin({
         // Simulate the removal of files
         dry: false,
         // Write Logs to Console
         verbose: true,
         // Automatically remove all unused webpack assets on rebuild, and the first build? yes first build included
         cleanStaleWebpackAssets: true,
         protectWebpackAssets: true // From code reading https://github.com/johnagan/clean-webpack-plugin/blob/master/src/clean-webpack-plugin.ts
                                     // this protects against deleting assets by mistake, if an asset matches one of patterns in cleanAfterEveryBuildPatterns
      }),
      // new webpack.HotModuleReplacementPlugin({
      //    // Options...
      //  }), // Web pack has its own plugins too
   ],
}