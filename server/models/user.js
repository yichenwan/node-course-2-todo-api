var mongoose = require('mongoose');

var User = mongoose.model(`User`, {
  email: {
    type: String,
    required: true,
    trim: true,
    minLenth: 1
  }
});

module.exports = {User};
