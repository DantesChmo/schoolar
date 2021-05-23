const { get } = require('got');
const { context } = require('@actions/github/lib/github');
console.log('Hello I am action');

const { payload } = context;
const pullNumber = payload.pull_request.number;
const owner = payload.repository.owner.login;
const repo = payload.repository.name;

(async () => {
  const result = await get(`https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/files`);
  const files = JSON.parse(result.body).map(({fileName}) => fileName);
  console.log(files);

  process.exit(0);
})();