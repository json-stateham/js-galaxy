const { httpServer } = require('./lib/http-server');
const { sendHtml } = require('./lib/sendHtml');

const routes = {
  '/': {
    GET: (_, res) => {
      sendHtml({ pathFile: 'client/index.html', res, code: 200 });
    }
  },
  '*': (_, res) => {
    sendHtml({ pathFile: 'client/404.html', res, code: 404 });
  }
};

const PORT = process.env.PORT || 5000;

const server = httpServer(routes);
server.listen(PORT, () => console.info(`Server running on port ${PORT}`));