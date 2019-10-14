const prodConfig = require('./webpack.config');

module.exports = {
  ...prodConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
  }
}
