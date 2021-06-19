
const path = require('path');
const relativePathToLibraryFromRNProjectRoot = "./modifiedRNLibraries/react-native-image-with-progress-bar";

module.exports = {
    dependencies: {
        "react-native-image-with-progress-bar": {
            root: path.resolve(__dirname, relativePathToLibraryFromRNProjectRoot)
        }
    },
    project: { ios: {}, android: {} },
    assets: [],
    commands: [],
    platforms: {}
  };
  