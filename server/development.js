import webpack from 'webpack'

/**
 * webpack utilities for work in development
 * @param {*} app express app
 */
export function developmentConfig (app) {
  console.log('mode development')

  const webpackConfig = require('../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const compiler = webpack(webpackConfig)
  const { publicPath } = webpackConfig.output
  const serverConfig = { serverSideRender: true, publicPath }

  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))
}