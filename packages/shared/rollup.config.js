import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

const packageJson = require('./package.json');
const outDir = 'build';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: `${outDir}/${packageJson.main}`,
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
      copy({
        targets: [
          {
            src: 'package.json',
            dest: outDir,
          },
        ],
      }),
    ],
  },
  {
    input: `${outDir}/types/${packageJson.types}`,
    output: [{ file: `${outDir}/index.d.ts`, format: 'esm' }],
    plugins: [dts(), del({ targets: [`${outDir}/types`], hook: 'buildEnd' })],
  },
];
