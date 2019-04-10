const func = require('../utils/func');
const config = require('../../config');
class Robot {
    constructor(table) {
        this.table    = table;
        this.isPlaced = false;
        this.vectorSteps = {
            'NORTH' : [0,1],
            'EAST'  : [1,0],
            'SOUTH' : [0,-1],
            'WEST'  : [-1,0]
        };
        this.directions = Object.keys(this.vectorSteps);
        this.current = [];
}

    place(x, y, direction, command) {
        x = parseInt(x, 10);
        y = parseInt(y, 10);
        if (this.table.validLocation(x, y)) {
            this.isPlaced = true;
            this.current  = [x, y];
            this.facing   = direction;
        } else {
            this.invalid(`${command} ${x}, ${y}`);
        }
    }

    move() {
        if (this.isPlaced) {
            this.current[0] += this.vectorSteps[this.facing][0];
            this.current[1] += this.vectorSteps[this.facing][1];
            this.current[0]  = func.keepInRange(0, this.current[0], this.table.row - 1);
            this.current[1]  = func.keepInRange(0, this.current[1], this.table.col - 1);
        }
    }

    turn(command) {
        if (this.isPlaced) {
            let directions    = this.directions;
            let current_index = directions.indexOf(this.facing);
            switch (command) {
                case config.LEFT :
                    this.facing = directions[(directions.length - 1 + current_index) % directions.length];
                    break;
                case config.RIGHT :
                    this.facing = directions[(directions.length + 1 + current_index) % directions.length];
                    break;
            }
        }
    }

    report() {
        if (this.isPlaced) {
            func.output(`ROBOT locate at: ${this.current[0]},${this.current[1]},${this.facing}`);
        }
    }

    invalid(command) {
        return func.error(`'${command}' is an invalid command`, false);
    }

}

module.exports = Robot;