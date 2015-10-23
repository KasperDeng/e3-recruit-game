var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

var path = require('path');

module.exports = {
    entry: {
    	index:       path.resolve(__dirname, 'app/index.js'),
    	tabBar:      path.resolve(__dirname, 'app/tabBar.js'),
    	gameApp:     path.resolve(__dirname, 'app/gameApp.js'),
    	gameSuccess: path.resolve(__dirname, 'app/gameSuccess.js'),
    },
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: '[name]Bundle.js'
    },
    resolve: {
    	extensions: ['', '.js', '.jsx']
  	},
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    },
    {
      test: /\.jsx$/,
      loader: 'babel-loader!jsx-loader?harmony'
    },
    {
      test: /\.(css)$/,
      loader: 'style-loader!css-loader'
    }]
  },
  //plugins: [commonsPlugin], // plugin to extract the public part in entries
};