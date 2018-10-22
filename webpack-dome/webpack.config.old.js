var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    "hello":"./src/script/hello.js",
    "a":"./src/script/a.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[hash].js',
    publicPath :'http://my.com'
  },
  plugins:[
    new HtmlWebpackPlugin({
        template:'./index.html',
        title:'webpack is good',
        minify:{
            removeComments:true,
            collapseWhitespace:true
        }
    })
  ]
};