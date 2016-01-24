var webpack = require('webpack');

module.exports = {
	entry: './app/components/mount.js',
	output: {
		path: './app',
		filename: 'bundled.js'
	},
	module: {
		loaders: [{
			test: /\.js?$/, 
			exclude: /(node_modules|bower_components)/, 
			loader: 'babel'
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({ sourceMap: false, mangle: false })
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	devServer: {
	   headers: { "Access-Control-Allow-Origin": "*" }
	}
};