const Robot = require('./helpers/Robot');
const Table = require('./helpers/Table');
const Cli = require('./helpers/Cli');
const output = require('./utils/func').output;
const config =require('../config');

class ToyRobot {
    constructor(x = 5, y = 5) {
        this.board = new Table(x, y);
    }

    start() {
        const robot = new Robot(this.board);
        const cli = new Cli();
        cli.run(cli.loadCommands(config.commands), robot);
    }
}

module.exports = ToyRobot;