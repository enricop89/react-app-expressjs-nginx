const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express(); // create express app
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// add middlewares
const root = require('path').join(__dirname, 'build');
app.use(express.static(root));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// start express server on port 5000
app.listen(process.env.PORT || 5000, () => {
  console.log('server started');
});