const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = () => {
    return {
        entry: {
            index: './src/index.tsx'
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].bundle.js',
            chunkFilename: '[id].js',
            publicPath: '/'
        },

        devtool: 'nosources-source-map',

        performance: {
          maxEntrypointSize: 5120000,
          maxAssetSize: 5120000,
          hints: false
      },

      plugins: [
          new CleanWebpackPlugin(),

          new HtmlWebpackPlugin({
              template: path.resolve(__dirname, 'public', 'index.html'),
          }),

          new MiniCssExtractPlugin({
              filename: '[name].style.css',
          }),

          new ESLintPlugin({
              lintDirtyModulesOnly: true,
              extensions: [
                  'ts',
                  'tsx'
              ]
          }),
      ],

      resolve: {
          modules: [
              'node_modules',
              'src',
              'public'
          ],
          extensions: [
              '.js',
              '.ts',
              '.tsx',
              '.css',
              '.scss'
          ],
          alias: {
              src: path.resolve(__dirname, 'src'),
              config: path.resolve(__dirname, 'config'),
          },
          plugins: [new TsconfigPathsPlugin()]
      },

      devServer: {
          port: 3000,
          hot: true,
          host: '0.0.0.0',
          historyApiFallback: true,
          allowedHosts: 'all',
          https: false,
          headers: {
              'Access-Control-Allow-Origin': '*'
          }
      },
      module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader',
                    }
                ],
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader',
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
              },
            {
                test: /\.(png|jpg|gif|pdf|eps)$/,
                oneOf: [
                    {
                        exclude: /node_modules/,
                        type: 'asset/resource',
                        generator: {
                            filename: 'images/[name][ext]'
                        }
                    },
                    {
                        issuer: /\.s?css$/,
                        type: 'asset/resource',
                        generator: {
                            filename: 'common/external/[contenthash].[ext]'
                        }
                    }
                ]
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[ext]'
                }
            },

            {
                test: /\.json$/,
                type: 'javascript/auto',
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'json/',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },

            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                ],
              },
              {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                      loader: "css-loader",
                      options: {
                        modules: {
                            localIdentName: '[local]--[hash:base64:5]',
                        },
                        sourceMap: true,
                      }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            },
        ]
    }
};
}