var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: './src/client/js/index.js',
	devServer: {
    proxy: {
      '*': 'http://localhost:5000'
    }
  },
  output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/', // relative path for the public folder
		filename: 'app.js', // no hash in main.js because index.html is a static page
	},
	resolve: {
		extensions: ['', '.js', '.css'],
		modulesDirectories: [
			'node_modules'
		],
	},
  devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.html$/,
				loader: 'html'
			},
      { test: /\.css$/, loader: "style-loader!css-loader?sourceMap" },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
  },
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			template: 'src/client/index.html'
		}),
		new ExtractTextPlugin('[name].css', {
			disable: true,
		}),
	]
}
