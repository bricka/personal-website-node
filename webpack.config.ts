import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
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
        test: /\.pdf/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};

export default config;
