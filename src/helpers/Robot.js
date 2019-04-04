const func = require('../func/func');
class Robot {
    constructor() {
    }

    getLocation() {
        return {
            x: this.x,
            y: this.y,
            facing: this.facing
        };
    }

    place(x, y, facing) {
        this.x = x;
        this.y = y;
        this.facing = facing;
    }

    move() {
        switch (this.facing) {
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
        }
    }

    moveNext() {
        switch (this.facing) {
            case 'NORTH':
                return [this.x, this.y + 1];
            case 'SOUTH':
                return [this.x, this.y - 1];
            case 'EAST':
                return [this.x + 1, this.y];
            case 'WEST':
                return [this.x - 1, this.y];
        }
    }

    moveEast() {
        this.x++;
    }

    moveWest() {
        this.x--;
    }

    moveNorth() {
        this.y++;
    }

    moveSouth() {
        this.y--;
    }

    turnLeft() {
        let new_direction = func.turnDirection(this.facing, "LEFT");
        this.facing = new_direction;
    }

    turnRight() {
        let new_direction = func.turnDirection(this.facing, "RIGHT");
        this.facing = new_direction;
    }
}

module.exports = Robot;