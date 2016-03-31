var express = require('express');
var router = express.Router();

var OTUData = require('../models/otudata');

module.exports = function (app) {
  OTUData.register(app, '/api/otudata');

  return router;
};
