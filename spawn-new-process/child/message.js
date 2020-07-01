const path = require('path');

//console.log(msg) === process.stdout.write(msg + '\n')
process.stdout.write(`The file path is: ${path.resolve(__dirname, __filename)}\n`);
