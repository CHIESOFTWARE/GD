# GDevelop IDE

This is a new, revamped editor for GDevelop. It is based on [React](https://facebook.github.io/react/), [Material-UI](http://www.material-ui.com), [Pixi.js](https://github.com/pixijs/pixi.js) and [Electron](https://electron.atom.io/).
It uses GDevelop [core C++ classes compiled to Javascript](https://github.com/4ian/GDevelop.js) to work with GDevelop games.

![GDevelop editor](https://raw.githubusercontent.com/4ian/GD/master/newIDE/gd-ide-screenshot.png "GDevelop editor")

## Installation

Make sure to have [Git](https://git-scm.com/) and [Node.js](https://nodejs.org) installed. [Yarn](https://yarnpkg.com) is optional.

```bash
git clone https://github.com/4ian/GD.git
cd GD/newIDE/app
yarn #or npm install
```

## Development

```bash
yarn start #or npm start
```

This will open the app in your web browser.

Images resources, GDJS Runtime, extensions will be copied in resources, and [libGD.js](github.com/4ian/GDevelop.js) will be downloaded automatically.

### Development of the standalone app

You can run the app with Electron. **Make sure that you've run `yarn start` in `app` folder before** (see above).

```bash
cd newIDE/electron-app
yarn #or npm install

#For macOS:
./node_modules/electron/dist/Electron.app/Contents/MacOS/Electron app

#For Windows:
node node_modules\electron\cli.js app

#For Linux: TODO, pull request welcome :)
```

### Development of UI components

You can run a [storybook](https://github.com/storybooks/storybook) that is used as a playground for rapid UI component development and testing:

```bash
cd newIDE/app
yarn run storybook
```

## Building the standalone app

```bash
cd newIDE/electron-app
yarn build #or npm run build
```

This will build and package the Electron app for Windows, macOS and Linux (according to your OS).
The output are stored inside `newIDE/electron-app/dist` and copied to `Binaries/Output/Release_XXX`.

## Current status

This new editor is still in development and not yet ready to build games from scratch:

- [x] Scene editor
- [x] Export
- [ ] Events editor
- [ ] Objects editor
- [ ] Support for native games
- [ ] Editor available online
- [ ] Export with Cocos2d-JS to Android and iOS.

## Additional help

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Check out their documentation for common tasks or help about using it.
