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
        'prettier',
        // 'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        // '@typescript-eslint/no-explicit-any': 'off',
        // '@typescript-eslint/explicit-function-return-type': 'off',
        'prefer-const': 'off',
        // 'prettier/prettier': 'warn',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
};
