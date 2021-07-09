/* eslint-disable */
module.exports = {
  "env": {
    "es2020": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "indent": [
      "error",
      2,
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "semi": [
      "error",
      "always"
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "varsIgnorePattern": "^_+" }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  }
};
