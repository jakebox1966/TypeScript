module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'prefer-const': 'off',
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
}
