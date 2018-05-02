const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const path = require('path')

const PORT = process.env.PORT || 80

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