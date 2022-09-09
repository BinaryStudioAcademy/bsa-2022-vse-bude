module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '^~/(.+)': './src/\\1',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
