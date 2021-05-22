const readline = require('readline');

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function readQuestion(question) {
  return new Promise((resolve) => {
    rlInterface.question(question, (answer) => {
      resolve(answer);
    });
  });
}

module.exports = {
  readQuestion
};