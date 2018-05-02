const express = require('express')
const routeur = express.Router()

routeur.get('/', async (req, res, next) =>{
    res.status(200).render('index', {pageTitle: "What's My Stats"}) 
})

module.exports = routeur