const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, "./src/client/build"),
    filename: "bundle.js",
    //publicPath allows you to specify the base path for all the assets within your application
    publicPath: "/"
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
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(jpg|png|gif|svg|woff|woff2|eot|ttf)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: __dirname + "/dist",
    historyApiFallback: true,
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  },
  plugins: [
    new ExtractTextPlugin("./src/client/styles/css/mystyles.css"),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    }),
    new CleanWebpackPlugin("./src/client/build")
  ]
};
