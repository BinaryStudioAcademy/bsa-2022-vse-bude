module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'parent', ['sibling', 'index']],
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],

    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'padded-blocks': ['error', 'never'],
    'lines-between-class-members': ['error', 'always'],
    'newline-before-return': 'error',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': 'error',
    'no-unused-vars': 'off',
    semi: ['error', 'always'],

    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
};
