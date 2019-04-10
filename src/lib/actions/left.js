// const directions = require('../../../config').directions;
const Command = require('../Command');

class Left extends Command {
    constructor() {
        super();
    }

    do(params, robot) {
        let {current, facing} = robot;
        let newFacing = this.turn(facing, 'LEFT');
        robot.setPosition(current[0],current[1], newFacing);
    }
}

module.exports = Left;