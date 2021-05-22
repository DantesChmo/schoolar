const { readQuestion } = require('../../utils/read-line-answer');
const { createPackage } = require('./create-package');
const { createApplication } = require('./create-application');

(async () => {
  const answer = await readQuestion('\nWhat you want to create? (type: application / package):\n');

  switch (answer) {
    case 'application':
      await createApplication();
      break;

    case 'package':
      await createPackage();
      break;

    default:
      process.exit(1);
  }

  process.exit(0);
})();
