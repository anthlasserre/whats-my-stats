const express = require('express')
const routeur = express.Router()

const OW = require('../services/overwatch.js')

routeur.get('/', async (req, res, next) =>{
    res.status(200).render('index', {pageTitle: "What's My Stats"}) 
});

routeur.get('/overwatch/:battletag', async(req,res,next) => {
    res.status(200);
    OW.searchPlayer('pc','eu',req.params.battletag).then(function(data) {
        console.log(data)
    });
})

module.exports = routeur