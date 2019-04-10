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

module.exports = Command;