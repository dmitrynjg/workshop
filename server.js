const express = require('express');
const app = express();
const fs = require('fs');

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.post('/user-reg', (req, res) => {
 //Проверка на существование файла
  if (!fs.existsSync('users.json')) {
    fs.writeFile('users.json', "", function(err) {
      if (err) {
        return console.log(err);
      }
    });
  };

  const data = fs.readFileSync('users.json', 'utf-8');
  let newData;
  if (data === '') {
    newData = req.body;
  } else {
    newData = data + ', \n' + req.body;
  }
  fs.writeFile('users.json', newData, function(err) {
    if (err) {
      return console.log(err);
    }
    else{
    console.log('The file was saved!');
    res.send(newData);
    }
  });
});

app.get('/users', (req, res) => {
  //Проверка на существование файла
  if (!fs.existsSync('users.json')) {
    fs.writeFile('users.json', "", function(err) {
      if (err) {
        return console.log(err);
      }
    });
  };

  const data = fs.readFileSync('users.json', 'utf-8');
  res.send(data);
});
app.listen(80, err => {
  if (err) return console.log('something bad happened', err);
  console.log('server is listening 80');
});
