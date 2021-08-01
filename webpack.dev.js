const path = require("path");
const webpack = require("webpack");
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); 
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
   output: {
      libraryTarget: 'var',
      library: 'Client', // Used in case we write explicit javascript in the html file to access exports of index.js from this global variable
      // This can be avoided if we register listeners in javascript aswell by using document.getElementBiId which is more in the direction of separation of concerns
      // This reference can be used in js files during development aswell as its a global
      path: path.resolve(__dirname, 'dist'), // specify this for CleanWebpackPlugin to work and see path value
   },
   optimization: {
      minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({}),], // This will only enable optimization in production mode
      minimize: true, // This will enable optimization in development mode aswell https://webpack.js.org/plugins/css-minimizer-webpack-plugin/
   },
   watch: true, // rebuild on file changes, used when working with server other than webpack dev server// rebuilding invokes plugins // [webpack-cli] No need to use the 'serve' command together with '{ watch: true }' configuration, it does not make sense.
   // devServer: {
   //    hot: true, // hot reloading feature
   //  },
   devtool: "eval-source-map",
   mode: "development",
   entry: "./src/client/index.js",
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: '/node_modules/',
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-env'] // Instead of .babelrc external config file at root directory
            }
         },
         // {
         //    test: /src\/client\/js/, // If no loaders found for file extension when webpack checks imports in js files
         //    // It will use loader for js files
         //    // Always use regex without quotations for some reason with quotations regex doesnt match files

         //    loader: ESLintPlugin.loader
         // },
         {
            test: /\.scss$/,
            use: [
               MiniCssExtractPlugin.loader,
               /* 'style-loader', loads css as inline styles at run time*/ 'css-loader', 'sass-loader']
         }
      ]
   },
   plugins: [  // Plugins run on bundles generated https://stackoverflow.com/questions/37452402/webpack-loaders-vs-plugins-whats-the-difference
      // Plugins run after loaders finish their work, although may be initialized before loaders are run as there is an error if we dont initialize plugins
      // .. used in loaders, to provide configuration for loaders used from the plugin
      // plugin order matters, they are run in the order specified
      // https://stackoverflow.com/questions/41470771/webpack-does-the-order-of-plugins-matter/41473106
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

      new ESLintPlugin({}), // Will do linting
      new HTMLPlugin({
         template: "./src/client/views/index.html", // Will generate index.html in dist folder, as well as 
         // put script tag of generated main.js 
         filename: "./index.html" // this has to be of name "index.html" in order to make dev server work
      }),
      new MiniCssExtractPlugin({}), // css is loaded in html regardless of the order between the two
      // new webpack.HotModuleReplacementPlugin({
      //    // Options...
      //  }), // Web pack has its own plugins too
      
   ],
}