import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const packageJson = require('./package.json');
const outDir = 'build';
const resolvedFolders = [
  'common',
  'helpers',
  'exceptions',
  'validation-schemas',
];

const main = 'index.cjs.js';
const module = 'index.esm.js';
const types = 'index.d.ts';

export default [
  {
    input: packageJson.main,
    output: [
      {
        file: `${outDir}/${main}`,
        format: 'cjs',
      },
      {
        file: `${outDir}/${module}`,
        format: 'esm',
      },
    ],
    plugins: [
      del({ targets: [outDir] }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser({
        compress: {
          passes: 2,
          properties: false,
        },
      }),
      generatePackageJson({
        outputFolder: outDir,
        baseContents: {
          ...packageJson,
          main,
          module,
          types,
          scripts: undefined,
        },
      }),
    ],
  },
  {
    input: `${outDir}/${types}`,
    output: [{ file: `${outDir}/${types}`, format: 'esm' }],
    plugins: [
      dts(),
      del({
        targets: resolvedFolders.map((folder) => `${outDir}/${folder}`),
        hook: 'buildEnd',
      }),
    ],
  },
];
