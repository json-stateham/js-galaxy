const { httpServer } = require('./lib/http-server');
const { resWrite } = require('./lib/response');

const routes = {
  '/': {
    GET: (_, res) => {
      resWrite(res)(200)('json');
      res.end(JSON.stringify({ text: 'Hello' }));
    }
  },
  '*': (_, res) => {
    resWrite(res)(404)('json');
    res.end(JSON.stringify({ text: 'Information not found' }));
  }
};

const PORT = process.env.PORT || 8080;

const server = httpServer(routes);
server.listen(PORT, () => console.info(`Server running on port ${PORT}`));
