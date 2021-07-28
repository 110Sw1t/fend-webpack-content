const path = require("path");
const webpack = require("webpack");
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   output: {
      path: path.resolve(__dirname, 'dist'), // specify this for CleanWebpackPlugin to work and see path value
    },
   watch:true, // rebuild when watching for file changes // doesn't have to work with dev server
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
            test: '/src\/client\/js/',
            loader: ESLintPlugin.loader
         }
      ]
   },
   plugins: [
      new ESLintPlugin(), 
      new HTMLPlugin({
         template: "./src/client/views/index.html", // Will generate index.html in dist folder, as well as 
                                                    // put script tag of generated main.js 
         filename: "./index.html"
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