const fse = require('fs-extra');
const jr = require('jr');
const path = require('path');

const httpServerPath = path.join('node_modules', '.bin', 'http-server');
const webpackPath = path.join('node_modules', '.bin', 'webpack');

const outDir = 'out';
const srcDir = 'src';

module.exports = () => ({
  build: {
    needs: ['bundle', 'copyFavicon', 'copyIndex']
  },
  bundle: {
    action: jr.scriptAction(webpackPath, ['--hide-modules'], { cwd: __dirname })
  },
  clean: {
    action: () => fse.remove(outDir)
  },
  copyFavicon: {
    action: () => fse.copy(path.join(srcDir, 'favicon', 'favicon.png'), path.join(outDir, 'favicon.png'))
  },
  copyIndex: {
    action: () => fse.copy(path.join(srcDir, 'app', 'root', 'index.html'), path.join(outDir, 'index.html'))
  },
  publish: {
    action: jr.processAction('gsutil', ['cp', '-r', 'out/**', 'gs://www.hereslookingateuclid.com'], { cwd: __dirname })
  },
  serve: {
    action: jr.scriptAction(httpServerPath, ['./out', '-o'], { cwd: __dirname })
  },
  watch: {
    action: jr.scriptAction(webpackPath, ['--hide-modules', '--progress', '--watch'], { cwd: __dirname })
  },
});
