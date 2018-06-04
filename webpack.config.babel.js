const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SystemBellPlugin = require('system-bell-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event || '';
const ROOT_PATH = __dirname;
const config = {
  paths: {
    demo: path.join(ROOT_PATH, 'demo'),
    dist: path.join(ROOT_PATH, 'umd'),
    gh: path.join(ROOT_PATH, 'gh-pages'),
    src: path.join(ROOT_PATH, 'src'),
    style: path.join(ROOT_PATH, 'src', 'main.css'),
  },
  filename: 'index',
};

process.env.BABEL_ENV = TARGET;

const common = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.png', '.jpg'],
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [
          config.paths.src,
        ],
      },
    ],
    loaders: [
      {
        test: /\.(jpg|png)$/,
        loader: 'file',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(ttf|eot|svg|gif)(\?[\s\S]+)?$/,
        loader: 'file',
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.md$/,
        loader: 'raw',
      },
    ],
  },
  plugins: [
    new SystemBellPlugin(),
  ],
};

const siteCommon = {
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [
          config.paths.demo,
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      NAME: JSON.stringify(pkg.name),
      USER: JSON.stringify(pkg.user),
      VERSION: JSON.stringify(pkg.version),
    }),
  ],
};

if (TARGET === 'start') {
  module.exports = merge(common, siteCommon, {
    devtool: 'eval-source-map',
    entry: {
      demo: [config.paths.demo, config.paths.style],
    },
    context: ROOT_PATH,
    plugins: [
      new HtmlWebpackPlugin({
        template: require('html-webpack-template'), // eslint-disable-line global-require
        inject: false,
        mobile: true,
        title: pkg.name,
        appMountId: 'app',
      }),
      new webpack.DefinePlugin({
        GH_PAGES: false,
        'process.env.NODE_ENV': '"development"',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel?cacheDirectory'],
          include: [
            config.paths.demo,
            config.paths.src,
          ],
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      host: process.env.HOST,
      port: process.env.PORT,
      stats: 'errors-only',
    },
  });
}

if (TARGET === 'gh-pages' || TARGET === 'gh-pages:stats') {
  module.exports = merge(common, siteCommon, {
    entry: {
      app: [config.paths.demo, config.paths.style],
      vendors: [
        'react',
        'react-dom',
        'redux',
        'react-redux',
        'react-router',
        'react-router-redux',
        'styled-components',
        'tinycolor2',
      ],
    },
    output: {
      filename: 'bundle.js',
      path: config.paths.gh,
    },
    plugins: [
      new CleanWebpackPlugin(['gh-pages'], {
        verbose: false,
      }),
      new CopyWebpackPlugin([
        { from: 'public/user2-160x160.jpg', to: 'public' },
      ]),
      new HtmlWebpackPlugin({
        template: 'lib/index_template.ejs',
        filename: 'index.html',

        // Context for the template
        title: pkg.name,
        description: pkg.description,
      }),
      new HtmlWebpackPlugin({
        template: 'lib/404_template.ejs',
        filename: '404.html',
        inject: false,

        // Context for the template
        title: pkg.name,
        remote: true,
      }),
      new webpack.DefinePlugin({
        GH_PAGES: true,
        // This affects the react lib size
        'process.env.NODE_ENV': '"production"',
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['app', 'vendors'],
        filename: '[name].bundle.js',
      }),
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: [
            config.paths.demo,
            config.paths.src,
          ],
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
        },
      ],
    },
  });
}

const distCommon = {
  output: {
    path: config.paths.dist,
    library: 'react-adminlte-dash',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: ['babel'],
        include: [
          config.paths.src,
        ],
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  entry: {
    app: config.paths.src,
  },
};

if (TARGET === 'dist') {
  module.exports = merge(common, distCommon, {
    output: {
      filename: `${config.filename}.js`,
    },
  });
}

if (TARGET === 'dist:min') {
  module.exports = merge(common, distCommon, {
    output: {
      filename: `${config.filename}.min.js`,
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ],
  });
}

if (!TARGET) {
  module.exports = common;
}
