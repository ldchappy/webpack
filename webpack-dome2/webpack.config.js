var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[hash].js'
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader:'postcss-loader',
            options:{
              plugins:[
                require("autoprefixer")
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
             loader: "style-loader"
          },
          {
              loader: "css-loader"
          },
          {
              loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use:
          {
            loader: 'babel-loader'
          }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
        template:'./index.html',
        inject:'body'
    })
  ]
};