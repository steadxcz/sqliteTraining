const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const sqlite3 = require('sqlite3');



const db = new sqlite3.Database('./database/database.db');

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


db.all("SELECT * FROM users", (error, rows) => {
    rows.forEach((row) => {
        console.log(row.id + " " + row.login);
    })
});