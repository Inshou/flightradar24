import pages from "./src/data/pages";
import paths from "./src/gulp/paths";

const webpackConfigDev = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
	entry: pages,
	output: {
    path: '/home/inshou/projects/flightradar24/dist/js/',
		filename: '[name].bundle.js',
    sourceMapFilename: "[name].js.map"
	},
  devtool: "source-map",
  plugins: [

  ]
};

export default webpackConfigDev;