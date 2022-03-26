module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true
  },
  plugins: ['jest', 'jest-dom', 'node', 'prettier', 'promise', 'regexp', 'security'],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:regexp/recommended',
    'plugin:security/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
