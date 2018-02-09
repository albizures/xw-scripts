#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

const rootDir = process.cwd()

require('yargs').command('jest', 'use jest', (yargs) => {
  const jest = require('jest')

  jest.run(['--config', require.resolve('./config/jest.js')]);
}).command('init', 'use jest', (yargs) => {
  const eslintConfig = fs.readFileSync(require.resolve('./config/eslintrc.tmpl.js'));
  const babelConfig = fs.readFileSync(require.resolve('./config/eslintrc.tmpl.js'));

  fs.writeFileSync(path.join(rootDir, '.eslintrc.js'), eslintConfig)
  fs.writeFileSync(path.join(rootDir, '.babelrc.js'), babelConfig)
}).argv




