const { context, getOctokit } = require('@actions/github/lib/github');
console.log('Hello I am action');


const { payload } = context;
const pullNumber = payload.pull_request;
const owner = payload.repository.owner.login;
const repo = payload.repository.name;

console.log(payload);
console.log(pullNumber);
console.log(owner);
console.log(repo);

const client = getOctokit('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');

(async () => {
  try {
    const result = await client.rest.pulls.listFiles({
      owner,
      repo,
      pull_number: 1
    });

    console.log(JSON.stringify(result));
  } catch (err) {
    console.log(err);
  }

  process.exit(0);
})();