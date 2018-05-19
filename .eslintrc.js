module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:flowtype/recommended',
  ],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-console': 0,
  },
  plugins: ['jest', 'flowtype'],
};
