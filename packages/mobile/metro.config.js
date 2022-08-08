const path = require('path');

const PATH_TO_NODE_MODULES = path.resolve(__dirname, './node_modules');
const PATH_TO_SHARED = path.resolve(__dirname, '../shared/build');

const extraNodeModules = {
  '@vse-bude/shared': PATH_TO_SHARED,
};

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) => {
        return target[name] ?? path.join(PATH_TO_NODE_MODULES, name);
      },
    }),
  },
  watchFolders: [PATH_TO_NODE_MODULES, PATH_TO_SHARED],
};
