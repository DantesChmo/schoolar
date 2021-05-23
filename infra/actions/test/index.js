const { get } = require('got');
const { context } = require('@actions/github/lib/github');
console.log('Hello I am action');

const { payload } = context;
const pullNumber = payload.pull_request.number;
const owner = payload.repository.owner.login;
const repo = payload.repository.name;

console.log(process.env.GITHUB_REF);
console.log(process.env.GITHUB_EVENT_PATH);
console.log(payload.pull_request);
console.log(pullNumber);
console.log(owner);
console.log(repo);

(async () => {
  const result = await get(`https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/files`);
  console.log(result);

  process.exit(0);
})();