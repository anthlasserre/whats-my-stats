const { ow } = require('../public-api/games.js')

const regex = new RegExp(`^([a-zA-Z0-9-_]{2,36})$`);

module.exports.home = async (req, res, next) =>{
    res.status(200).render('index', {
        header:true,
        searchBar:true,
        supportedGames:true
    });
}

module.exports.search = async (req, res, next) => {
    if (req.body.constructor === Object && Object.keys(req.body.pseudo).length === 0) {
        res.status(200).render('index', {
            header:true,
            searchBar:true,
            supportedGames:true,
            errorPseudo:true, 
            errorMessage:"You need to fill the input with your pseudo !"
        })
    }
    else {
        if (req.body.pseudo.match(regex)) {
            var rOW = ow(req.params.imageConsole, 'eu', req.body.pseudo)
            



            res.status(200).render('index', {
                header:true,
                searchBar:true,
                resultSearch:true,
                statsFor:req.body.pseudo,
                gameStats:11,
                pseudoFound:true
            })
        }
        else {
            res.status(200).render('index', {
                header:true,
                searchBar:true,
                errorPseudo:true,
                supportedGames:true,
                errorMessage:"Invalid pseudo"
            })
        }
    }
}