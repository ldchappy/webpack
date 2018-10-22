var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    "hello":"./src/script/hello.js",
    "a":"./src/script/a.js",
    "b":"./src/script/b.js",
    "c":"./src/script/c.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[hash].js',
    publicPath :'http://my.com'
  },
  plugins:[
    new HtmlWebpackPlugin({
        filename:'a.html',
        template:'./index.html',
        title:'webpack is a',
        chunks:['main','a']
    }),
    new HtmlWebpackPlugin({
        filename:'b.html',
        template:'./index.html',
        title:'webpack is b',
        chunks:['main','b']
    }),
    new HtmlWebpackPlugin({
        filename:'c.html',
        template:'./index.html',
        title:'webpack is c',
        chunks:['main','c']
    }),
  ]
};