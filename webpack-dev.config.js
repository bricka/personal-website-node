const prodConfig = require('./webpack.config');

module.exports = {
  ...prodConfig,
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  }
}
