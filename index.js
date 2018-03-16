/*
 * Copyright 2018 Julian Cable <julian.cable@yahoo.com>
 *
 */

const debug = require('debug')('routes')

module.exports = function (app) {
  const error = app.error || (msg => {console.error(msg)})
  const apiRoutePrefix = '/signalk/v1/api/resources'
  let pluginStarted = false

  var plugin = {}

  plugin.start = function (props) {
    debug(`Start plugin routes`)
    pluginStarted === false && registerRoutes()
    pluginStarted = true
  }

  plugin.stop = function () {
    debug(`Stop plugin routes`)
  }

  plugin.id = 'routes'
  plugin.name = 'Signal K Routes'
  plugin.description =
    "Plugin that provides a source of route resources"

  plugin.schema = {
    type: 'object',
    properties: {
    }
  }

  function registerRoutes() {

    app.get(apiRoutePrefix + "/routes", (req, res) => {
      res.json({})
    })
  }

  return plugin

}
