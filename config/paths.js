const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const envPublicUrl = process.env.PUBLIC_URL;

// eslint-disable-next-line import/no-dynamic-require,global-require
const getPublicUrl = appPackageJson => envPublicUrl || require(appPackageJson).homepage;

// config after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp('dist'),
  appIndexJs: resolveApp('src/index.js'),
  appNodeModules: resolveApp('node_modules'),
  appPackageJson: resolveApp('package.json'),
  appPath: resolveApp('.'),
  appPublic: resolveApp('public'),
  appSrc: resolveApp('src'),
  components: resolveApp('src/components'),
  constants: resolveApp('src/constants'),
  dotenv: resolveApp('.env'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  styles: resolveApp('src/styles'),
  yarnLockFile: resolveApp('yarn.lock'),
};
