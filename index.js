// prequisitions
const express = require('express');
const path = require('path');
const app = express();

// bodyParser Use
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

// set view engine
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'))


const mysql = require('mysql2')
const http = require('http');
const res = require('express/lib/response');
const { redirect } = require('express/lib/response');

/*
const con = mysql.createConnection({
    host: "localhost",
    user: "kyttmartin",
    password: "XvTR5TCDPQxZ",
    database: "kyttmartin_ABS",
    port:3306,
});

con.connect((err) => {
    if (err) throw err;
    res.end('Connected!');
})
*/

// render default page
app.get('/', (req, res) => {
  res.render('index', {
    title: 'login'
  });
});

// on entering credentials
app.post('/login', (req, res) => {
  // variables
  let firstName = req.body.firstName;
  let familyName = req.body.familyName;
  let email = req.body.email;
  let id = req.body.identity_id;
  let cur_time = new Date().getMinutes;

  console.log(firstName + " " + familyName + " " + email + " " + id)

  // check if name in system
  let query; // name
  if (firstName == query) {
    query = 'last time';
    let last_time; // query last time
    // check if voting time expired
    if ((last_time - cur_time) > 5) res.redirect('/voting');
    else res.redirect('/result');
  }
  else res.redirect('/voting');
  
});

app.post('/answer', (req, res) => {
  let answer = req.body.with;
  
  console.log(answer);

  res.redirect('/result')
});

// voting page
app.get('/voting', (req, res) => {
    res.render('voting', {
      title: 'voting'
    });
});

app.get('/result', (req, res) => {
  res.render('tulemus', {
    title: 'results'
  });
});

/*
const mainRouter = require('./routers/main');

app.use('/', mainRouter);
app.use('/voting', mainRouter);
app.use('/result', mainRouter);
*/

const server = app.listen(3010, () => {
    console.log(`Express running -> PORT ${server.address().port}`)
  });