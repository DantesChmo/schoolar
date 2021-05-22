const path = require('path');
const commonJs = require('@rollup/plugin-commonjs');
const typeScript = require('rollup-plugin-typescript2');
const css = require('rollup-plugin-import-css');
const { visualizer } = require('rollup-plugin-visualizer');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { sizeSnapshot } = require("rollup-plugin-size-snapshot");
const { terser } = require('rollup-plugin-terser');

const inputRoot = path.resolve(__dirname, './src');
const outputRoot = path.resolve(__dirname, './out');
const reportsRoot = path.resolve(__dirname, './reports');

const inputPath = path.join(inputRoot, './index.ts');
const outputStylePath = 'out/index.css'; // rollup-plugin-import-css bug!
const outputScriptPath = path.join(outputRoot, './index.js');
const tsconfigPath = path.resolve(__dirname, './tsconfig.json');
const visualizerPath = path.join(reportsRoot, './build.html');
const snapshotPath = path.join(reportsRoot, './build-snapshot.json');

module.exports = {
  input: 'src/index.ts',
  output: {
    file: 'out/index.js',
    format: 'cjs'
  },
  plugins: [
    nodeResolve({
      rootDir: 'src'
    }),
    css({
      output: 'index.css',
      minify: true,
      alwaysOutput: false
    }),
    typeScript({
      tsconfig: './tsconfig.json',
      exclude: 'tests'
    }),
    visualizer({filename: './reports/build.html'}),
    sizeSnapshot({snapshotPath: './reports/build-snapshot.json'}),
    terser()
  ]
};
