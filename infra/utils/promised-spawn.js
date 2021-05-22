const { exec } = require('child_process');

function spawnPromised(command) {
  return new Promise((resolve, reject) => {
    const stream = exec(command);

    stream.stdout.pipe(process.stdout);
    stream.stderr.pipe(process.stderr);

    stream.on('exit', () => {
      resolve();
    })

    stream.on('error', (data) => {
      reject(data);
    });
  });
}

module.exports = {
  spawnPromised
};
