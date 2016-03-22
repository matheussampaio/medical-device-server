var express = require('express');
var router = express.Router();

var OUTData = require('../models/outdata');

module.exports = function(app) {
  OUTData.register(app, '/api/outdata');

  return router;
};
