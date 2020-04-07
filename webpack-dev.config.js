const prodConfig = require('./webpack.config');

module.exports = {
  ...prodConfig,
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
  }
}
