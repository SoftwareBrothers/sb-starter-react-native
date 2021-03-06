module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true
  },
  settings: {
    react: {
      version: "detect",
    }
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "jest",
    "react",
    "react-native"
  ],
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:react-native/all"
  ],
  rules: {
    "semi": ["error", "never"],
    "key-spacing": ["error", { "beforeColon": false }],
    "jsx-quotes": ["error", "prefer-single"],
    "max-len": ["error", 120, 2],
    "object-curly-spacing": ["error", "always"],
    'object-curly-newline': ['error', {
      'ObjectExpression':  { minProperties: 4, multiline: true, consistent: true },
      'ObjectPattern':     { minProperties: 6, multiline: true, consistent: true },
      'ImportDeclaration': { minProperties: 6, multiline: true, consistent: true },
      'ExportDeclaration': { minProperties: 2, multiline: true, consistent: true },
    }],
    "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
    "curly": ["error"],
    "no-global-assign": ["error"],
    "no-magic-numbers": ["error", { "ignoreArrayIndexes": true, "ignore": [-1, 0, 1] }],
    "no-useless-return": ["error"],
    "max-lines": ["error", { "max": 200, "skipComments": true }],
    "multiline-ternary": ["error", "never"],
    "newline-before-return": "error",
    "sort-keys": ["error", "asc", { "caseSensitive": true, "natural": false }],
    "react/display-name": ["warn"],
    "arrow-parens": ["error", "always"],
    "no-use-before-define": ["error", { "functions": false }],
    "space-before-function-paren": ["error", "always"],
    "import/prefer-default-export": ["off"],
    "react/jsx-indent": ["error", 2]
  }
}