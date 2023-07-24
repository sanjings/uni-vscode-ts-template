const ci = require('miniprogram-ci');
const { project } = require('./project');
const { prompt } = require('./prompt');

(async () => {
  const { version, desc } = await prompt();

  ci.upload({
    project,
    version,
    desc,
    robot: 2,
    setting: {
      es6: true,
      minify: true,
      autoPrefixWXSS: true
    }
  });
})();
