const fs = require('fs');

const readDir = fs.readdir('./', 'utf8', (err, files) => {
  if (err) {
    throw err;
  } else {
    process.stdout.write(files.join('\n'))
    process.stdout.write('\nprompt > ')
  }
});

function processls (command) {
  if (command === 'ls') {
    readDir;
  }
}

module.exports = processls;
