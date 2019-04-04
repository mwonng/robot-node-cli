const SimulatorHelper = require('./helpers/Simulator');
const TableHelper = require('./helpers/Table');
const CliHelper = require('./helpers/Cli');
const config =require('../config');

class ToyRobot {
    constructor(x = 5, y = 5) {
        this.board = new TableHelper(x, y);
    }

    start() {
        const simulator = new SimulatorHelper(this.board);
        const Cli = new CliHelper();
        Cli.loadCommands(config.commands);
        Cli.run(Cli.getLoadedCommands(), simulator);
    }
}

module.exports = ToyRobot;