const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = require('fs-readdir-recursive');

const promisedFsReadFile = promisify(fs.readFile);
const promisedFsWriteFile = (path, content) => new Promise((resolve) => {
  fs.writeFile(path, content, () => {
    resolve();
  });
});

async function replaceDirPlaceholders(dirFromPath, placeholders) {
  const dirFromFileNames = readdir(dirFromPath);

  const filesFrom = await Promise.all(dirFromFileNames.map(async (filePath) => {
    const fullPath = path.resolve(dirFromPath, filePath);
    const content = await promisedFsReadFile(fullPath);

    return ({
      filePath,
      content: content.toString('utf-8')
    });
  }));

  await Promise.all(filesFrom.map(async ({filePath, content}) => {
    const fullPath = path.resolve(dirFromPath, filePath);

    const {needReplace, newContent: replacedContent} = placeholders.reduce((result, {placeholder, value}) => {
      const regExp = new RegExp(placeholder, 'g');
      if (regExp.test(result.newContent)) {
        result.newContent = result.newContent.replace(new RegExp(placeholder, 'g'), value);
        result.needReplace = true;
      }

      return result;
    }, {newContent: content, needReplace: false});

    if (needReplace) {
      await promisedFsWriteFile(fullPath, replacedContent);
    }
  }));
}

module.exports = {
  replaceDirPlaceholders
};
