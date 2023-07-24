const inquirer = require('inquirer');

const defaultVersion = '0.0.1';
const defaultDesc = new Date().toLocaleString() + ' 上传';

const prompt = async () => {
  return await inquirer.prompt([
    {
      name: 'version',
      type: 'input',
      message: '版本号',
      default: defaultVersion
    },
    {
      name: 'desc',
      type: 'input',
      message: '描述',
      default: defaultDesc
    }
  ]);
};

module.exports = {
  defaultVersion,
  defaultDesc,
  prompt
};
