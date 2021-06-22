const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

module.exports = {
  entry: ['./src/Example'],
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jupyter-react-example.js',
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  devServer: {
    static: path.join(__dirname, "dist"),
    proxy: {
      '/api/jupyterpool': {
         target: 'http://localhost:8888',
         ws: true
      },
    },
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
//    alias: {
//      process: "process/browser"
//    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.md$/, use: 'raw-loader' },
      { test: /\.js.map$/, use: 'file-loader' },
      {
        // In .css files, svg is loaded as a data URI.
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: /\.css$/,
        use: {
          loader: 'svg-url-loader',
          options: { encoding: 'none', limit: 10000 }
        }
      },
      {
        // In .ts and .tsx files (both of which compile to .js), svg files
        // must be loaded as a raw string instead of data URIs.
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: /\.js$/,
        use: {
          loader: 'raw-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|ttf|woff|woff2|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{ loader: 'url-loader', options: { limit: 10000 } }]
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.c?js/,
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),  
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new HtmlWebpackTagsPlugin({
      links: [
        'http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css',
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
      ],
      append: false, 
      publicPath: false
    }),
  ]
};
