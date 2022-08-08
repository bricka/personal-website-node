import * as webpack from 'webpack';

import prodConfig from './webpack.config';

import 'webpack-dev-server';

const config: webpack.Configuration = {
  ...prodConfig,
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
  }
};

export default config;
