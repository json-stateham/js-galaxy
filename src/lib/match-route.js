const strictRouteRegex = route => `^${route}$`;
const scrict404Regex = '.*';

const matchRoute = ({ req, res, routing }) => {
  const { url, method } = req;

  const pathEqualToRoute = Object.keys(routing).find(path => {
    const routeRegex = path !== '*' ? strictRouteRegex(path) : scrict404Regex;
    return url.match(new RegExp(routeRegex));
  });

  const equalRoute = routing[pathEqualToRoute];

  if (!equalRoute[method]) {
    return equalRoute(req, res);
  }

  return equalRoute[method](req, res);
};

module.exports = {
  matchRoute
};
