const { readQuestion } = require('../../utils/read-line-answer');

async function addDeps(isDev) {
  const answer = await readQuestion('\nDo you want to install devDependencies? (type depName1 depName2 / no)');
}

module.exports = {
  addDeps
};
