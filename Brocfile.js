const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const LiveReload = require('broccoli-livereload');
const Rollup = require("broccoli-rollup");
const babel = require("rollup-plugin-babel");
const resolver = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const litcss = require('rollup-plugin-lit-css');

const APP_ROOT = 'app';
const browserTargets = [
  'chrome >= 30',
  'firefox >= 32',
  'ios >= 9',
  'last 1 edge versions',
  // 'last 1 version'
];

const html = Funnel(APP_ROOT, {
  files: ['index.html'],
  annotation: 'Index file'
});

const js = new Rollup(APP_ROOT, {
  inputFiles: ['**/*.js'],
  annotation: 'JS transformation',
  rollup: {
    input: 'app.js',
    output: {
      file: 'assets/app.js',
      format: 'iife', // "amd", "cjs", "system", "esm", "iife" or "umd"
      sourcemap: true
    },
    plugins: [
      litcss(),
      resolver(),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              modules: false,
              targets: browserTargets
            }
          ]
        ]
      })
    ]
  }
});

let tree = MergeTrees([html, js], {
  annotation: 'Final output'
});

tree = new LiveReload(tree, {
  target: 'index.html'
});

module.exports = tree;
