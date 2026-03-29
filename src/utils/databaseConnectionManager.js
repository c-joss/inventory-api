const mongoose = require('mongoose');

function dbConnect() {
  return mongoose.connect(process.env.MONGODB_URI);
}

function dbDisconnect() {
  return mongoose.disconnect();
}

module.exports = { dbConnect, dbDisconnect };
