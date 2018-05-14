const Express = require('express')
var routeur = Express.Router()
const { search, home } = require('../controllers/games.js')

routeur.get('/', home)
routeur.post('/search', search)

<<<<<<< HEAD
=======
const OW = require('../services/overwatch.js')
const R6 = require('../services/R6.js')
const RL = require('../services/rocketleague.js')

routeur.get('/', async (req, res, next) =>{
    res.status(200).render('index', {pageTitle: "What's My Stats"}) 
});

routeur.get('/overwatch/:battletag', async(req,res,next) => {
    res.status(200);
    OW.searchPlayer('pc','eu',req.params.battletag).then(function(data) {
        console.log(data)
    });
})

routeur.get('/R6/:username', async(req,res,next) => {
    res.status(200);
    R6.searchPlayer('uplay',req.params.username).then(function(data) {
        console.log(data)
    })
})

routeur.get('/RocketLeague/:username', async(req,res,next) => {
    res.status(200);
    RL.searchPlayer('steam',req.params.username).then(function(data) {
        console.log(data)
    })
})
>>>>>>> a2d9276c9f54c9bad2e3c94a8614c0a40badfd54

module.exports = routeur