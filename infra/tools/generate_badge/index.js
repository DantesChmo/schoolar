const path = require('path');
const fs = require('fs');

const badgePath = path.resolve(__dirname, './badge.svg');
const badgeContent = fs.readFileSync(badgePath).toString('utf-8');
const currentDir = process.cwd();

const packageJson = fs.readFileSync(path.join(currentDir, 'package.json'));
const packageVersion = JSON.parse(packageJson.toString()).version;

fs.writeFileSync(
  path.join(currentDir, './version-badge.svg'),
  badgeContent.replace(new RegExp('{{name}}', 'g'), packageVersion)
);
