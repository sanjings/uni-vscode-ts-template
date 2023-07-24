const ci = require('miniprogram-ci');
const { resolve } = require('node:path');

const project = new ci.Project({
  appid: '',
  type: 'miniProgram',
  projectPath: resolve(__dirname, '../dist/build/mp-weixin'),
  privateKeyPath: process.cwd() + '/key/private.xxxxxx.key',
  ignores: ['node_modules/**/*']
});

module.exports = {
  project
};
