const config = {
  bail: true,
  clearMocks: true,
  verbose: true,
  maxConcurrency: 3,
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/coverage/**'
  ]
};

module.exports = config;
