const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const path = require('path')

// Mongo Params
const MongoClient = require('mongodb').MongoClient;
const mongoUrl = 'mongodb://localhost:27017/whatsmystats';
const optionsMongo = { useNewUrlParser: true };

// Connection MongoDb
MongoClient.connect(mongoUrl, optionsMongo, function (err, db) {
  if (err) throw 'Error connecting to database - ' + err;
  app.listen(8000, function () {
      console.log('MongoDB Listening on port 8000');
  });
});

const PORT = process.env.PORT || 3000

// Moteur pug
app.set('view engine', 'pug')

// Contenu des pages
app.use(bodyParser.urlencoded({ extended: true }))

// Favicon
app.use(favicon(__dirname + '/assets/images/logoWMS.png'))

// Css & Images & Js
app.use(express.static(__dirname + '/assets/css'))
app.use(express.static(__dirname + '/assets/images'))
app.use(express.static(__dirname + '/assets/js'))

// Routes
app.use('/', require("./routes/homePage"))

// Ecoute sur le port 80
app.listen(PORT, () => {
    console.log("Serveur en écoute sur le port : " + PORT)
  })
