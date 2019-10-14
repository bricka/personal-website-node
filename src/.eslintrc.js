module.exports = {
  env: {
    browser: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect',
    }
  }
}
