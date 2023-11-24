/** @type {import("@rspack/cli").Configuration} */
module.exports = {
  entry: { main: "./src/Three.js" },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: [
          {
            loader: "./loader.cjs",
            options: {
              times: 10,
            },
          },
        ],
      },
    ],
  },
};
