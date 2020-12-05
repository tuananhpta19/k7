const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodemy-k7', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(
  console, 'connection error:'
));
db.once('open', function() {
  // we're connected!
  console.log("kết nối db thành công");
});
module.exports = mongoose;
