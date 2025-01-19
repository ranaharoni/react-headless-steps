module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
    rules: {
        // You can add or override any rules here
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'react/prop-types': 'off', // If you're using TS, prop-types are usually not needed
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
}

