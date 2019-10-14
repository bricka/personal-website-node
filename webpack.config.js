const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },

  resolve: {
    extensions: [ '.ts' ]
  },

  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|pdf)$/i,
        loader: 'file-loader',
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
  ]
}
