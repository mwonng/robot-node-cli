// const Command = require('../Command');
const vectorSteps = require('../../../config').vectorSteps;

class Move {
    do(params, robot) {
        if (robot.getIsPlaced() == true) {
            let facing = robot.facing;
            let x = robot.current[0];
            let y = robot.current[1];
            x += vectorSteps[facing][0];
            y += vectorSteps[facing][1];
            if (robot.table.validLocation(x, y)) {
                robot.setPosition(x, y, facing);
            }
        }
    }
}
module.exports = Move;


