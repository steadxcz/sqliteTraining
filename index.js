
const port = 80 || process.env.PORT;
const sqlite3 = require('sqlite3');
const querystring = require('querystring');
var url = require('url');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const db = new sqlite3.Database('./database/database.db');


/************************************************************/
//app.use(express.static(path.join(__dirname, 'public')));
app.listen(port);
app.use('/', router);

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/root/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/api', function (req, res) {
  var reqUrl = url.parse(req.url, true);
  res.end("APIRESPONSE");
  if (reqUrl.query.a != undefined) {
    console.log('got a request');
  }
});




db.all("SELECT * FROM users", (error, rows) => {
  rows.forEach((row) => {
    console.log(row.id + " " + row.login);
  })
});