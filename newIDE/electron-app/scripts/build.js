var shell = require('shelljs');

var gdRootDir = '../..';
var gdBinariesOutputDir = gdRootDir + '/Binaries/Output';

if (!shell.test('-f', './node_modules/.bin/build')) {
  shell.echo('Please run npm install in electron-app folder');
  shell.exit();
}

// shell.exec('npm run build:app');

shell.rm('-rf', 'app/www');
shell.mkdir('-p', 'app/www');
shell.cp('-r', '../app/build/*', 'app/www');

shell.exec('node node_modules/.bin/build --mac');
shell.mkdir('-p', gdBinariesOutputDir + '/Release_Darwin/newIDE');
shell.cp(
  '-r',
  './dist/mac/GDevelop IDE.app',
  gdBinariesOutputDir + '/Release_Darwin/newIDE'
);

shell.exec('node node_modules/.bin/build --win --ia32');
shell.mkdir('-p', gdBinariesOutputDir + '/Release_Windows/newIDE');
shell.cp(
  '-r',
  './dist/win-ia32-unpacked/*',
  gdBinariesOutputDir + '/Release_Windows/newIDE'
);

shell.exec('node node_modules/.bin/build --linux tar.gz');
shell.mkdir('-p', gdBinariesOutputDir + '/Release_Linux/newIDE');
shell.cp('-r', './dist/linux/*', gdBinariesOutputDir + '/Release_Linux/newIDE');