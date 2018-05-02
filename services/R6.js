'use strict';

const R6Api = require('rainbowsix-api-node')
const R6 = new R6Api()

module.exports = class RainbowSix {
    static searchPlayer(platform,username) {
        return new Promise((resolve, reject) => {
            R6.stats(username,platform).then((response) => {
                resolve(response);
            })
        })
    }
}