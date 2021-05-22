const path = require('path');
const fse = require('fs-extra');
const { readQuestion } = require('../../utils/read-line-answer');

async function createApp() {
  const appName = await readQuestion('\nType name: ');
  const sourcePath = path.resolve(__dirname, '../../../templates/app');
  const outputPath = path.resolve(__dirname, `../../../apps/${appName}`);

  fse.copySync(sourcePath, outputPath);
  console.log('\nDONE!\n');
}

async function createApplication() {
  const answer = await readQuestion('\nWhat type of application do you want to create? (type: app / service):\n');

  if (!['app', 'service'].includes(answer)) {
    process.exit(1);
  }

  await createApp();
}

module.exports = {
  createApplication
};
