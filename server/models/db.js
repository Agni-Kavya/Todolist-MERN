const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://agnikavya20:admin@cluster0.yxa8psg.mongodb.net/', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(() => {
  console.log('Mongodb connection success');
})
.catch((err) => {
  console.log(`Error in db connection ${err}`);
});

module.exports = mongoose;
