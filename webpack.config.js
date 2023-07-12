const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		// filename: 'bundle.js',
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath: '/',
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html')
		}),
	],


	devtool: 'inline-source-map',

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// 3. Creates `style` nodes from JS strings
					"style-loader",
					// 2. Translates CSS into CommonJS
					"css-loader",
					// 1. Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.(ico|svg|png|gif|jpg|jpeg|avif)$/,
				exclude: /fonts/,
				loader: 'file-loader'
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				loader: 'file-loader'
			},
			{
				// test: /\.tsx?$/,
				test: /\.m?(ts|js)x?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},


	devServer: {
		historyApiFallback: true,
		port: 3000,
		// proxy: {
		// 	"/api": {
		// 		target: "https://api.itbook.store/1.0",
		// 		pathRewrite: {
		// 			'^/api/': '',
		// 		},
		// 		changeOrigin: true,
		// 		secure: false,
		// 	}
		// }
	},


	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},

}