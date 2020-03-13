const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', (req, res) => {
  res.send('user add');
  console.log(req.body);
});

app.listen(80, err => {
  if (err) return console.log('something bad happened', err);
  console.log('server is listening 80');
});
