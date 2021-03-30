const express = require('express');
const path = require('path');
const app = express();
const handleProduction = require('./utils/handleProduction');


// set static resource
app.use(express.static(path.resolve(__dirname, 'public')));
handleProduction(app, express, path);

app.use('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

let count = 0;

app.get('/get/user/info', (req, res) => {
  const searchTerm = req.query['searchTerm'];
  let time = 0;
  while (time < 400) {
    time = Math.random() * 1000;
  };
  setTimeout(() => {
    res.json({ id: 1, name: 'user-test', city: 10, count: count++, searchTerm });
  }, time)
});

app.get('/get/city', (req, res) => {
  const city = req.query['city'];
  console.log('city :>> ', city);
  res.json({ id: 10, name: 'city-test' });
});

app.listen(3001, () => {
  console.log('server is running on port 3001')
});
