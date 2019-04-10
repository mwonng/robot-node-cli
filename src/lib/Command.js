const config = require('../../config');
const func = require('../utils/func');
class Command {
    constructor() {
        this.vectorSteps = config.vectorSteps;
        this.directions = config.directions;
    }
}

class Turn extends Command {
    constructor() {
        super();
    }
}

class Right extends Turn {
    constructor() {
        super();
    }

    do(params, robot) {
        let facing = robot.facing;

        let directions = this.directions;
        let current_index = directions.indexOf(facing);
        facing = directions[(directions.length + 1 + current_index) % directions.length];
        robot.setPosition(robot.getX(),robot.getY(), facing);
    }
}

class Left extends Turn {
    constructor() {
        super();
    }

    do(params, robot) {
        let facing = robot.facing;

        let directions = this.directions;
        let current_index = directions.indexOf(facing);
        facing = directions[(directions.length - 1 + current_index) % directions.length];
        robot.setPosition(robot.getX(),robot.getY(), facing);
    }
}

class Move extends Command {
    constructor() {
        super();
    }

    do(params, robot) {
        if (robot.getIsPlaced() == true) {
            let facing = robot.facing;
            let x = robot.getX();
            let y = robot.getY();
            x += this.vectorSteps[facing][0];
            y += this.vectorSteps[facing][1];
            if (robot.table.validLocation(x, y)) {
                robot.setPosition(x, y, facing);
            }
        }
    }
}

class Place extends Command {
    constructor() {
        super();
    }

    do(params, robot) {
        let x = parseInt(params.x, 10);
        let y = parseInt(params.y, 10);
        if (robot.table.validLocation(x, y)) {
            robot.setPosition(x, y, params.direction);
            robot.setIsPlaced();
        } else {
            func.error("Place a wrong location!");
        }
    }
}

class Report extends Command {
    constructor() {
        super();
    }

    do(params, robot) {
        let facing = robot.facing;
        if (robot.getIsPlaced() == true) {
            func.output(`ROBOT locate at: ${robot.getX()},${robot.getY()},${facing}`);
        }
    }
}


const actions = {
    left: Left,
    right: Right,
    move: Move,
    report: Report,
    place: Place,
};

module.exports = (action_name) => {
    return actions[action_name];
};