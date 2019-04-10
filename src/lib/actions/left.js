
const directions = require('../../../config').directions;
class Left {
    do(params, robot) {
        let {current, facing} = robot;
        let current_index = directions.indexOf(facing);
        facing = directions[(directions.length - 1 + current_index) % directions.length];
        robot.setPosition(current[0],current[1], facing);
    }
}

module.exports = Left;