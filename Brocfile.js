const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const Rollup = require("broccoli-rollup");
const babel = require("rollup-plugin-babel");
const resolver = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const terser = require('rollup-plugin-terser').terser;
const filesize = require('rollup-plugin-filesize');
const BrowserSync = require('broccoli-browser-sync');

const APP_ROOT = 'app';
const browserTargets = [
  'chrome >= 30',
  'firefox >= 32',
  'ios >= 9',
  'last 1 edge versions'
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
      }),
      terser(),
      filesize()
    ]
  }
});

const server = new BrowserSync([html, js]);

const tree = MergeTrees([html, js, server], {
  annotation: 'Final output'
});

module.exports = tree;
