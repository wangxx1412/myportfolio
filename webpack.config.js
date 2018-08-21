const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js",
    //publicPath allows you to specify the base path for all the assets within your application
    publicPath:'/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
      test: /\.(s*)css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
      test: /\.(jpg|png|gif|svg|woff|woff2|eot|ttf)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 25000,
        },
      },
    }
    ]
  },
  devServer: {
    //historyAPIFallback will redirect 404s to /index.html
    historyApiFallback: true,
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:4000"
    }
  },
  plugins: [
    new ExtractTextPlugin('./src/client/styles/css/mystyles.css'),
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    })
  ]
};