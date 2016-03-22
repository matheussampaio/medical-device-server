var restful = require('node-restful');
var mongoose = restful.mongoose;

var OUTData = restful.model('outdata', new mongoose.Schema({
  date: {
    type: String,
    trim: true
  },
  time: {
    type: String,
    trim: true
  },
  glucose: {
    type: String,
    trim: true
  },
  serial: {
    type: String,
    trim: true
  },
  unit: {
    type: String,
    trim: true
  },
  userFlag: {
    type: String,
    trim: true
  },
  mealComment: {
    type: String,
    trim: true
  }
}))
.methods(['get', 'post', 'put', 'delete']);

module.exports = OUTData;
