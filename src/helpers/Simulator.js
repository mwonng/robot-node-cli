const func = require('../func/func');
const error = require('../func/error');
const RobotHelp = require('../helpers/Robot');

class Simulator {
    constructor(table) {
        this.table = table;
        this.isPlaced = false;
        this.robot = new RobotHelp();
        this.current = {};
    }

    place(x, y, direction) {
        x = parseInt(x, 10);
        y = parseInt(y, 10);
        if (this.table.validLocation(x, y)) {
            this.isPlaced = true;
            this.robot.place(x, y, direction);
            this.current = this.robot.getLocation();
        }
    }

    move() {
        if (
            this.isPlaced &&
            this.table.validLocation(...this.robot.moveNext(this.current))
        ) {
            this.robot.move(this.current);
            this.current = this.robot.getLocation();
        }
    }

    turnLeft() {
        if (this.isPlaced) {
            this.robot.turnLeft();
            this.current = this.robot.getLocation();
        }
    }

    turnRight() {
        if (this.isPlaced) {
            this.robot.turnRight();
            this.current = this.robot.getLocation();
        }
    }

    report() {
        if (this.isPlaced) {
            let current = this.robot.getLocation();
            func.output(`${current.x},${current.y},${current.facing}`);
            return(`${current.x},${current.y},${current.facing}`);
        }
    }

    invalid(command) {
        error(`${command} is an invalid command`, false);
    }

}

module.exports = Simulator;