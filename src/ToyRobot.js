const Robot  = require('./lib/Robot');
const Table  = require('./lib/Table');
const Cli    = require('./lib/Cli');
const config = require('../config');

class ToyRobot {
    constructor(x = 5, y = 5) {
        this.board = new Table(x, y);
    }

    start() {
        const robot = new Robot(this.board);
        const cli   = new Cli();
        cli.runAll(cli.loadCommands(config.commands), robot);
    }
}

module.exports = ToyRobot;