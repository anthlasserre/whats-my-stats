'use strict';

const RL = require('rocketleague')
const rl_client = new RL.Client('1VTHWZ8AEAR2LVJLJ14L44FVG41L7KEQ');

module.exports = class RocketLeague {
    static searchPlayer(platform,username) {
        return rl_client.getPlayer(username,platform)
    }
}

