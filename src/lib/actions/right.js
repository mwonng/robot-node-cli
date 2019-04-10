const Command = require('../Command');
class Right extends Command {
    constructor() {
        super();
    }

    do(params, robot) {
        let {current, facing} = robot;
        let newFacing = this.turn(facing, 'RIGHT');
        robot.setPosition(current[0],current[1], newFacing);
    }
}

module.exports = Right;