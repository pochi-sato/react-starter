const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development';
  // const example = argv['example'];
  if (!env) return 'your env is wrong.';
  // if(!example) return 'your argument hasn\'t example.';

  const outputFilename = 'main.js';
  const globalConstants = Object.assign(
    {}, // merge先のオブジェクト。破壊的なので必ず空にする
    // {
    //   EXAMPLE: example,
    // },
    require(`./config/global.${env}`),
  );

  const settings = {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
        {
          test: /\.jsx?$/,
          exclude: [/node_modules/],
          loader: 'babel-loader',
        },
        {
          test: /\.tsx?$/,
          exclude: [/node_modules/],
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: outputFilename,
      path: path.resolve(__dirname, './dist'),
    },
    plugins: [
      new webpack.DefinePlugin({
        GLOBAL_CONFIG: JSON.stringify(globalConstants),
      }),
    ],
    devServer: {
      port: 3001,
      historyApiFallback: true,
      hot: true,
      contentBase: path.resolve(__dirname, './dist'),
    },
  };

  if (IS_DEVELOPMENT) settings.devtool = 'inline-source-map';

  return settings;
};
