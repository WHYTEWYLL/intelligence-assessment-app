const mongoose = require('mongoose');

const URI = process.env.MONGODB_URL || 'mongodb://root:password@mongodb:27017';

console.log(URI);

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
  .then(res => console.log('Connection successful!'))
  .catch(err => console.log('Error: ' + err));