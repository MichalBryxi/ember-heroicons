'use strict';

module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            plugins: [['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }]]
        }
    },
    plugins: ['ember', 'prettier'],
    extends: ['eslint:recommended', 'plugin:ember/recommended', 'plugin:prettier/recommended'],
    env: {
        browser: true
    },
    rules: {
        'ember/no-jquery': 'error',
        'prettier/prettier': ['error', { usePrettierrc: true }]
    },
    overrides: [
        // node files
        {
            files: [
                './.eslintrc.js',
                './.stylelintrc.js',
                './.template-lintrc.js',
                './ember-cli-build.js',
                './index.js',
                './testem.js',
                './blueprints/*/index.js',
                './config/**/*.js',
                './tests/dummy/config/**/*.js'
            ],
            parserOptions: {
                sourceType: 'script'
            },
            env: {
                browser: false,
                node: true
            },
            extends: ['plugin:n/recommended']
        },
        {
            // test files
            files: ['tests/**/*-test.{js,ts}'],
            extends: ['plugin:qunit/recommended']
        }
    ]
};
