var owjs = require('overwatch-js');

module.exports.ow = async (csl, region, pseudo) => {
    owjs.getOverall(csl, region, pseudo)
    .then((data) => console.dir(data, {depth : 2, colors : true}) );
}
