const { CORS_HEADERS } = require('../config/cors');
const { CONTENT_TYPES } = require('../config/content-types');

const resWrite = response => responseCode => contentType =>
  response.writeHead(responseCode, {
    ...CORS_HEADERS,
    ...CONTENT_TYPES[contentType]
  });

module.exports = {
  resWrite
};
