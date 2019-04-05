const Robot = require('./helpers/Robot');
const TableHelper = require('./helpers/Table');
const Cli = require('./helpers/Cli');
const config =require('../config');

class ToyRobot {
    constructor(x = 5, y = 5) {
        this.board = new TableHelper(x, y);
    }

    start() {
        const robot = new Robot(this.board);
        const cli = new Cli();
        cli.loadCommands(config.commands);
        cli.run(cli.getLoadedCommands(), robot);
    }
}

module.exports = ToyRobot;