const { matchRoute } = require('../lib/match-route');

jest.mock('../lib/match-route', () => ({
  ...jest.requireActual('../lib/match-route')
}));

const req = {
  method: 'GET',
  url: '/'
};

const res = {};

const routingMap = {
  '/': {
    GET: jest.fn(() => 'index')
  },
  '/photos': {
    GET: jest.fn(() => 'photos')
  },
  '*': jest.fn(() => '404')
};

describe('matchRoute', () => {
  test('should return index', () => {
    const result = matchRoute({ routingMap, req, res });

    expect(result).toBe('index');
  });

  test('should return page', () => {
    const result = matchRoute({
      routingMap,
      req: { ...req, url: '/photos' },
      res
    });

    expect(result).toBe('photos');
  });

  test('should return 404, if route does not exist', () => {
    const result = matchRoute({
      routingMap,
      req: { ...req, url: '/qwerty' },
      res
    });

    expect(result).toBe('404');
  });
});
