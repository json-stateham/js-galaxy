const { matchRoute } = require('./match-route');

const isProd = process.env.NODE_ENV === 'production';
const server = isProd ? require('https') : require('http');

const httpServer = routingMap =>
  server.createServer((req, res) => matchRoute({ req, res, routingMap }));

module.exports = {
  httpServer
};
