// const Table = require('./Table');
// const Robot = require('./Robot');
const func = require('../func/func');
class Simulator {
    constructor(table) {
        this.table = table;
        this.isPlaced = false;
        this.current = {};
    }

    place(x, y, direction) {
        x = parseInt(x, 10);
        y = parseInt(y, 10);
        if (this.table.validLocation(x, y)) {
            this.isPlaced = true;
            this.current = {
                x : x,
                y : y,
                facing : direction
            };
        }
    }

    move() {
        if (this.isPlaced) {
            switch (this.current.facing) {
                case 'NORTH':
                    this.moveNorth();
                    break;
                case 'SOUTH':
                    this.moveSouth();
                    break;
                case 'EAST':
                    this.moveEast();
                    break;
                case 'WEST':
                    this.moveWest();
                    break;
                default:
                    this.invalid();
            }
        }
    }

    moveNorth() {
        this.table.validLocation(this.current.x, this.current.y + 1) ? this.current.y++ : null;
    }

    moveSouth() {
        this.table.validLocation(this.current.x, this.current.y - 1) ? this.current.y++ : null;
    }

    moveEast() {
        this.table.validLocation(this.current.x + 1, this.current.y) ? this.current.x++ : null;
    }

    moveWest() {
        this.table.validLocation(this.current.x - 1, this.current.y) ? this.current.x++ : null;
    }

    turnLeft() {
        if (this.isPlaced) {
            let new_direction = func.turnDirection(this.current.facing, "LEFT");
            this.current.facing = new_direction;
        }
    }

    turnRight() {
        if (this.isPlaced) {
            let new_direction = func.turnDirection(this.current.facing, "RIGHT");
            this.current.facing = new_direction;
        }
    }

    report() {
        if (this.isPlaced) {
            func.output(`${this.current.x},${this.current.y},${this.current.facing}`);
            return(`${this.current.x},${this.current.y},${this.current.facing}`);
        }
    }

    invalid() {
        console.log("invalid command");
    }

}

module.exports = Simulator;