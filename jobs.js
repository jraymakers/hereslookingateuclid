const fse = require('fs-extra');
const jr = require('jr');
const path = require('path');

const basicServePath = path.join('node_modules', '.bin', 'basicServe');
const eslintPath = path.join('node_modules', '.bin', 'eslint');
const webpackPath = path.join('node_modules', '.bin', 'webpack');

const outDir = 'out';
const srcDir = 'src';

module.exports = () => ({
  build: {
    needs: ['buildDev']
  },
  buildDev: {
    needs: ['bundleDev', 'copy', 'lint']
  },
  buildProd: {
    needs: ['bundleProd', 'copy', 'lint']
  },
  bundleDev: {
    action: jr.scriptAction(webpackPath, ['--hide-modules', '--mode', 'development'], { cwd: __dirname })
  },
  bundleProd: {
    action: jr.scriptAction(webpackPath, ['--hide-modules', '--mode', 'production'], { cwd: __dirname })
  },
  clean: {
    action: () => fse.remove(outDir)
  },
  copy: {
    needs: ['copyFavicon', 'copyIndex']
  },
  copyFavicon: {
    action: () => fse.copy(path.join(srcDir, 'favicon', 'favicon.svg'), path.join(outDir, 'favicon.svg'))
  },
  copyIndex: {
    action: () => fse.copy(path.join(srcDir, 'entry', 'index.html'), path.join(outDir, 'index.html'))
  },
  lint: {
    action: jr.scriptAction(eslintPath, ['src/**/*.tsx'], { cwd: __dirname })
  },
  publish: {
    action: jr.processAction('gsutil', ['cp', '-r', 'out/**', 'gs://www.hereslookingateuclid.com'], { cwd: __dirname })
  },
  publishBundle: {
    action: jr.processAction('gsutil', ['cp', 'out/bundle.js', 'gs://www.hereslookingateuclid.com/bundle.js'],
      { cwd: __dirname })
  },
  serve: {
    action: jr.scriptAction(basicServePath, ['./out'], { cwd: __dirname })
  },
  watch: {
    action: jr.scriptAction(webpackPath, ['--hide-modules', '--progress', '--watch'], { cwd: __dirname })
  },
});
