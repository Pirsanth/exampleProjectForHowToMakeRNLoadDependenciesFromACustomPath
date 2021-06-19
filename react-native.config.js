
const path = require('path');
const relativePathToLibraryFromRNProjectRoot = "./modifiedRNLibraries/react-native-image-with-progress-bar";

module.exports = {
    dependencies: {
        //comment out the below and run pod install again to use the regular version of the library from node_modules without the red background
        "react-native-image-with-progress-bar": {
            root: path.resolve(__dirname, relativePathToLibraryFromRNProjectRoot)
        }
    },
    project: { ios: {}, android: {} },
    assets: [],
    commands: [],
    platforms: {}
  };
  