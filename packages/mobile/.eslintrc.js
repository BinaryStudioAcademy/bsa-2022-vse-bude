module.exports = {
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '../../.eslintrc.js',
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'prettier/prettier': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
