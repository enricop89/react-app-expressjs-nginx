const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express(); // create express app
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// add middlewares
let root = require('path').join(__dirname, 'build');
if (process.env.NODE_ENV === 'development') {
  app.use(express.static(root));
  app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
} else {
  root = require('path').join(__dirname, '..', 'client', 'build');
  app.use(express.static(root));
  app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}



// start express server on port 5000
app.listen(process.env.PORT || 5000, () => {
  console.log('server started');
});