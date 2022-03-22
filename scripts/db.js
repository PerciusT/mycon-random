// const mysql = require('mysql');
// const pool = mysql.createPool({
//     connectionLimit: 100,
//     password: process.env.DB_PASS,
//     user: process.env.DB_USER,
//     database: process.env.MYSQL_DB,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT
// });

var mysql = require('mysql');
let db = {};

db.createdb = () =>{

        var con = mysql.createConnection({
          host: "localhost",
          user: "yourusername",
          password: "yourpassword"
        });
            var create=`create database slot;-- 
            CREATE TABLE slot.user (
              ID int NOT NULL AUTO_INCREMENT,
              Username varchar(50) NOT NULL,
              Email varchar(100) DEFAULT NULL,
              Password varchar(200) DEFAULT NULL,
              Status int NOT NULL,
              PRIMARY KEY (ID),
              UNIQUE KEY ID_UNIQUE (ID),
              UNIQUE KEY Email_UNIQUE (Email)
            );
            CREATE TABLE slot.pages (
              id int NOT NULL,
              hostname varchar(45) NOT NULL,
              html text,
              PRIMARY KEY (hostname,id),
              UNIQUE KEY hostname_UNIQUE (hostname),
              UNIQUE KEY id_UNIQUE (id),
              KEY userid_idx (id),
              CONSTRAINT userid FOREIGN KEY (id) REFERENCES user (ID) ON DELETE CASCADE ON UPDATE CASCADE
            );
            CREATE TABLE slot.data (
              id int NOT NULL,
              data text,
              PRIMARY KEY (id),
              CONSTRAINT id FOREIGN KEY (id) REFERENCES user (ID)
            )`
        con.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          con.query(create, function (err, result) {
            if (err) throw err;
            console.log("Database created");
          });
        });
};
module.exports = db;