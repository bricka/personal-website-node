/* tslint:disable:object-literal-sort-keys */

const path = require('path');

module.exports = {
  mode: 'production',

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },

  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ],
  },

  module: {
    rules: [
      {
        test: /.tsx?$/,
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
    ],
  },
};
