const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;


const connection=mysql.createConnection({
    host:"testdb.cergfpiaziwa.us-east-1.rds.amazonaws.com",
    user:"admin",
    password:"12345678",
    database:"covid19",
    port:"3306",
    connectionLimit: 15,
    queueLimit: 30,
    acquireTimeout: 1000000
})

connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log("Database connection established");

});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// var covidtable = 'covid_details2';


app.get('/', (req, res) => {
        res.render('index',{
            title:"Add User",
        });
});

// app.get('/', (req, res) => {
//     // res.send({
//     //     title:"starting node server"
//     // })
    
//     let createquery = "CREATE TABLE IF NOT EXISTS ?? (ID int NOT NULL AUTO_INCREMENT,statename VARCHAR(255), dateofrecord date,numofsamples int(11),numofdeaths int(11),numofpos int(11),numofneg int(11),numofdis int(11),PRIMARY KEY (ID))"
    
//     let starterquery = connection.query(createquery,[covidtable],(err,rows)=>{
//         if(err) throw err;
//         console.log("create query executed");
//     });

//     // let insertQuery = "Insert into ?? (statename, dateofrecord, numofsamples,numofdeaths,numofpos,numofneg,numofdis) values ('kerala','2018-10-20',12,8,5,3,2)";
//     // let insquery = connection.query(insertQuery,covidtable,(err,rows)=>{
//     //     if(err) throw err;
//     //     else console.log("insert query executed")
//     // });

//     let sql = "SELECT * FROM ??";
//     let query = connection.query(sql,[covidtable],(err,rows,res1)=>{
//         if(err) throw err;
//     res.render('user_index',{
//         title:"Covid Data Bank",
//         covidlist : rows
//     });
// });
// });

// app.get('/add', (req, res) => {
//     res.render('user_add',{
//         title:"Add User",
//     });
// });

// app.get('/test', (req, res) => {
//     res.send({
//         title:"starting node server"
//     })});

// app.post('/save', (req, res) => {
//     let data = {
//         statename: req.body.statename,
//         dateofrecord: req.body.dateofrecord,
//         numofsamples: req.body.numofsamp,
//         numofdeaths: req.body.numofdeath,
//         numofpos: req.body.numofpos,
//         numofneg: req.body.numofneg,
//         numofdis: req.body.numofdis,
//     }

//     let sql = "INSERT INTO ?? SET ?";
//     let insQuery = connection.query(sql,[covidtable,data],(err,results)=>{
//         if(err) throw err
//         else console.log("insert sucess");
//         res.redirect('/');

//     });
// });


// app.get('/edit/:ID', (req, res) => {
//     const ID = req.params.ID;
//     let sql = `Select * from ?? where ID = ${ID}`
//     let query = connection.query(sql,[covidtable],(err,results)=>{
//         if(err) throw err;
//         res.render('user_edit',{
//             title: "Edit Info",
//             covidlist :results[0],
//         })
//     });
// });

// app.post('/update', (req, res) => {
//     const ID = req.body.ID;
//     let sql = "update ?? SET statename='"+req.body.statename+"',  dateofrecord='"+req.body.dateofrecord+"',  numofsamples='"+req.body.numofsamp+"',numofdeaths='"+req.body.numofdeath+"',numofpos='"+req.body.numofpos+"',numofneg='"+req.body.numofneg+"',numofdis='"+req.body.numofdis+"' where id ="+ID;;
//     let insQuery = connection.query(sql,[covidtable],(err,results)=>{
//         if(err) throw err
//         else console.log("update sucess");
//         res.redirect('/');

//     });
// });

// app.get('/delete/:ID', (req, res) => {
//     const ID = req.params.ID;
//     let sql = `DELETE from ?? where ID = ${ID}`
//     let query = connection.query(sql,[covidtable],(err,results)=>{
//         if(err) throw err;
//         else console.log("delete success");
//         res.redirect('/');
//     });
// });

app.listen(port,()=>{
    console.log('listening on port:', port);
});

