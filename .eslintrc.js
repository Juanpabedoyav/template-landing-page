module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'next/core-web-vitals',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
