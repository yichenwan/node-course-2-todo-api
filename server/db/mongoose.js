var mongoose = require(`mongoose`);

mongoose.Promise = global.Promise;
process.env.MONGODB_URI || `mongodb://localhost:27017/TodoApp`);

module.exports = {mongoose};
