const func = require('../func/func');

class Simulator {
    constructor(table) {
        this.table = table;
        this.isPlaced = false;
        this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
        this.vectorSteps = [[0,1],[1,0],[0,-1],[-1,0]];
        this.current = [];
    }

    place(x, y, direction) {
        x = parseInt(x, 10);
        y = parseInt(y, 10);
        if (this.table.validLocation(x, y)) {
            this.isPlaced = true;
            this.current = [x, y];
            this.facing = direction;
        }
    }

    move() {
        if (this.isPlaced) {
            let index = this.directions.indexOf(this.facing);
            this.current[0] += this.vectorSteps[index][0];
            this.current[1] += this.vectorSteps[index][1];
            this.current[0] = func.keepInRange(0, this.current[0], this.table.row - 1);
            this.current[1] = func.keepInRange(0, this.current[1], this.table.col - 1);
        }
    }

    turn(command) {
        if (this.isPlaced) {
            let directions = this.directions;
            let current_index = directions.indexOf(this.facing);
            if (command === "LEFT") {
                this.facing = directions[(directions.length - 1 + current_index) % directions.length];
            } else {
                this.facing = directions[(directions.length + 1 + current_index) % directions.length] ;
            }
        }
    }

    report() {
        if (this.isPlaced) {
            func.output(`${this.current[0]},${this.current[1]},${this.facing}`);
            return(`${this.current[0]},${this.current[1]},${this.facing}`);
        }
    }

    invalid(command) {
        return func.error(`${command} is an invalid command`, false);
    }

}

module.exports = Simulator;