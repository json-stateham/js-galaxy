const { httpServer } = require('./lib/http-server');
const { resWrite } = require('./lib/response');
const { readHtmlFile } = require('./lib/readHtmlFile');

const routes = {
  '/': {
    GET: (_, res) => {
      const html = readHtmlFile('static/index.html');
      resWrite(res)(200)('html');
      res.end(html);
    }
  },
  '*': (_, res) => {
    const html = readHtmlFile('static/404.html');
    resWrite(res)(404)('html');
    res.end(html);
  }
};

const PORT = process.env.PORT || 5000;

const server = httpServer(routes);
server.listen(PORT, () => console.info(`Server running on port ${PORT}`));