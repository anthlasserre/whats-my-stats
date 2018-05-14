'use strict';

const owjs = require('overwatch-js')

module.exports = class Overwatch {
    
    /**
     * 
     * @param {*} plateforme 
     * @param {*} zone 
     * @param {*} battletag 
     */
    static searchPlayer(plateforme, zone, battletag) {
        return new Promise((resolve, reject) => {
            owjs.getAll(plateforme, zone, battletag)
            .then((data) => {
                resolve(data);
            });
        })
    }
}
