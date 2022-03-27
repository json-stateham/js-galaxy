const http = require('http');
const { httpServer } = require('../lib/http-server');

jest.mock('http', () => require('../config/mocks/http'));

const routesMock = {
  '^/$': {
    GET: jest.fn(() => 'index.html')
  },
  '.*': jest.fn(() => '404.html')
};

describe('httpServer', () => {
  it('should create server', () => {
    httpServer(routesMock);
    expect(http.createServer).toBeCalledTimes(1);
  });
});
