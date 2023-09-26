module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
    "prettier"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // 'prettier/prettier': ['error', { singleQuote: true }],
    // 'quotes': [2, 'single', { 'avoidEscape': true }],
    // 'jsx-quotes': [2, 'prefer-single'],
    "avoidEscape": true,
    "allowTemplateLiterals": true,
    "quotes": "off"
  }
}
