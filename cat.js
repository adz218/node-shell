const fs = require('fs');

function catCmd (command, arg) {
  if (command === 'cat') {
    readFile(arg);
  }
}

function readFile(arg) {
  fs.readFile(`./${arg}`, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data)
    }
  })
}


module.exports = catCmd;
