/* eslint-disable eol-last */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: 'off',
        'class-methods-use-this': 'off',
        'space-before-function-paren': 'off',
        'no-param-reassign': 'off',
        camelcase: 'off',
    },
};
