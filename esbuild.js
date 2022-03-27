require('esbuild').buildSync({
  entryPoints: ['./src/index.js'],
  bundle: true,
  minify: true,
  platform: 'node',
  external: ['./node_modules/*'],
  target: ['node10.4'],
  outfile: 'dist/index.js'
});
