module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@core": "./src/core",
          "@common": "./src/common",
          "@test": "./test"
        }
      }
    ],
    "react-native-reanimated/plugin"
  ]
};
