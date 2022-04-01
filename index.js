
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
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port);
console.log(`listeting on port ${port}`);
app.use('/', router);

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/root/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/api', function (req, res) {
  var reqUrl = url.parse(req.url, true);
  console.log(reqUrl.query);
  if (reqUrl.query.login != undefined && reqUrl.query.password != undefined) {
    databaseController(reqUrl.query.login, reqUrl.query.password, res);
  }

});



/* testing block
db.all("SELECT * FROM users", (error, rows) => {
  rows.forEach((row) => {
    console.log(row.id + " " + row.login);
  })
});*/


function databaseController(login, password, res) {
 // console.log(`SELECT * FROM users WHERE login=${login}`);

  
  db.get(`SELECT * FROM users WHERE login="${login}"`, (err, row) => {
    if (row != null) {
      console.log(1234);
      if (row.password == password) {
        console.log("authorized " + login);
        res.end(row.walletID);
      }
    } else {
      db.get(`INSERT INTO users (login,password,walletID) 
              VALUES ("${login}","${password}","${Math.round(Math.random()*1000)}")     
      `);
    }

  });

}