const { matchRoute } = require('./match-route');

const isProd = process.env.NODE_ENV === 'production';
const server = isProd ? require('https') : require('http');

const httpServer = routing =>
  server.createServer((req, res) => matchRoute({ req, res, routing }));

module.exports = {
  httpServer
};
