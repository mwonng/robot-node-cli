const config = require('../../config');
class Command {
    constructor() {
        this.vectorSteps = config.vectorSteps;
        this.directions = config.directions;
    }

    turn(facing, turnTo) {
        let directions = this.directions;
        let current_index = directions.indexOf(facing);
        if (turnTo === 'LEFT') {
            facing = directions[(directions.length - 1 + current_index) % directions.length];
        } else if ( turnTo === 'RIGHT') {
            facing = directions[(directions.length + 1 + current_index) % directions.length];
        }
        return facing;
    }
}

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

class Move extends Command {
    constructor() {
        super();
    }

    do(params, robot) {
        if (robot.getIsPlaced() == true) {
            let facing = robot.facing;
            let x = robot.current[0];
            let y = robot.current[1];
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
        this.turn();
        if (robot.table.validLocation(x, y)) {
            robot.setPosition(x, y, params.direction);
            robot.setIsPlaced();
        } else {
            console.log("Place a wrong position!");
        }
    }

}

class Report extends Command {
    constructor() {
        super();
    }

    do(params, robot) {
        let {current, facing} = robot;
        if (robot.getIsPlaced() == true) {
            console.log(`ROBOT locate at: ${current[0]},${current[1]},${facing}`);
        }
    }
}

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