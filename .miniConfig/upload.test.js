const ci = require('miniprogram-ci');
const { project } = require('./project');
const { defaultVersion, defaultDesc } = require('./prompt');

(async () => {
  ci.upload({
    project,
    version: defaultVersion,
    desc: defaultDesc,
    robot: 1,
    setting: {
      es6: true,
      minify: true,
      autoPrefixWXSS: true
    }
  });
})();
