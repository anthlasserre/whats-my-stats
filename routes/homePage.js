const Express = require('express')
var routeur = Express.Router()
const { search, home } = require('../controllers/games.js')

routeur.get('/', home)
routeur.post('/search', search)


module.exports = routeur