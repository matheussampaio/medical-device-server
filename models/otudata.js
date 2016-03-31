var restful = require('node-restful');
var mongoose = restful.mongoose;

var OTUSchema = new mongoose.Schema({
  dateTime: {
    type: Number,
    trim: true,
    required: true
  },
  glucose: {
    type: Number,
    trim: true,
    required: true
  },
  serial: {
    type: String,
    trim: true,
    required: true
  },
  unit: {
    type: String,
    trim: true,
    required: true
  },
  userFlag: {
    type: String,
    trim: true
  },
  mealComment: {
    type: String,
    trim: true
  }
});

OTUSchema.index({ dateTime: 1, serial: 1 }, { unique: true });

var OTUData = restful.model('otudata', OTUSchema)
  .methods(['get', 'post', 'put', 'delete']);

module.exports = OTUData;
