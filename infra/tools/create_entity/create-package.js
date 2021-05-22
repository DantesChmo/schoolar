const path = require('path');
const fse = require('fs-extra');
const { readQuestion } = require('../../utils/read-line-answer');
const { replaceDirPlaceholders } = require('../../utils/replace-dir-placeholders');

async function createPackageFromType(type) {
  const packageName = await readQuestion('\nPackage name: ')
  const description = await readQuestion('\nDescription: ');

  const sourcePath = path.resolve(__dirname, `../../../templates/${type}-package`);
  const outputPath = path.resolve(__dirname, `../../../packages/${packageName}`);

  fse.copySync(sourcePath, outputPath);

  await replaceDirPlaceholders(
    outputPath,
    [{
      placeholder: '{{description}}',
      value: description
    }, {
      placeholder: '{{name}}',
      value: packageName
    }]
  );
}

async function createPackage() {
  const answer = await readQuestion('\nWhat type of project do you want to create? (type: front / back):\n');
  if (!['front', 'back'].includes(answer)) {
    process.exit(1);
  }

  await createPackageFromType(answer);
}

module.exports = {
  createPackage
};