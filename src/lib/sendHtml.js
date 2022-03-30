const fs = require('fs');
const path = require('path');
const markup = require('../client/client');
const { resWrite } = require('./response');

const sendHtml = ({ pathFile, res, code }) => {
  let htmlmarkup = fs.readFileSync(path.resolve('src', pathFile), {
    encoding: 'utf8'
  });

  htmlmarkup = htmlmarkup.replace('%ROOT%', markup);
  resWrite(res)(code)('html');
  res.end(htmlmarkup);
};

module.exports = {
  sendHtml
};
