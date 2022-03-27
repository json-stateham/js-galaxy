const fs = require('fs');
const path = require('path');
const markup = require('../client/client');

const prepareHtml = pathToFile => {
  const htmlTemp = fs.readFileSync(path.resolve('src', pathToFile), {
    encoding: 'utf8'
  });

  return htmlTemp.replace('%ROOT%', markup);
};

module.exports = {
  prepareHtml
};
