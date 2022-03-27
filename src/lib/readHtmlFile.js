const fs = require('fs');
const path = require('path');

const readHtmlFile = pathToFile =>
  fs.readFileSync(path.resolve('src', pathToFile), {
    encoding: 'utf8'
  });

module.exports = {
  readHtmlFile
};
