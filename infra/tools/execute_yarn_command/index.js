const path = require('path');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { readQuestion } = require('../../utils/read-line-answer');
const { spawnPromised } = require('../../utils/promised-spawn');

const argv = yargs(hideBin(process.argv)).argv;

(async () => {
  const {command, project} = argv;

  const answer = project || await readQuestion(`\nWrite project path to ${command} (ex /packages/tmp): `);

  const cwd = process.cwd();
  const projectPath = path.join(cwd, answer);

  await spawnPromised(`cd ${projectPath} && yarn ${command}`);
  process.exit(0);
})();
