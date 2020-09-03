const express = require('express')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

require('dotenv').config();
// initialise mongoose and get it running
require('./db/db');

// require routers for express
const userRouter = require('./routers/user');
const eventRouter = require('./routers/event');


// express app init
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
app.use(cookieParser());

/*const whitelist = [
  'https://juegos-tfg.herokuapp.com',
  'http://juegos-tfg.herokuapp.com',
  'juegos-tfg.herokuapp.com',
  '*'
]*/

/*app.use(cors({
    credentials: true,
    origin: function(origin, callback) {
      console.log(origin)
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    } 
  }));*/
app.use(cors());

app.get('/hey', (req, res) => res.send('ho!'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

// register routers
app.use(userRouter);
app.use(eventRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port + '.');
});