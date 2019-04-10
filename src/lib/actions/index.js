const move = require('./move');
const place = require('./place');
const report = require('./report');
const left = require('./left');
const right = require('./right');

const actions = {
    move,
    place,
    report,
    left,
    right,
};

module.exports = (action_name) => {
    return actions[action_name];
};

