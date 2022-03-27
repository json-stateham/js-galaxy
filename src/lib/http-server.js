const http = require('http');
const { matchRoute } = require('./match-route');

const httpServer = routingMap =>
  http.createServer((req, res) => matchRoute({ req, res, routingMap }));

module.exports = {
  httpServer
};
