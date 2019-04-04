const SimulatorHelper = require('./helpers/Simulator');
const TableHelper = require('./helpers/Table');
const CliHelper = require('./helpers/Cli');
const config =require('../config');

class ToyRobot {
    constructor() {
        this.board = new TableHelper(5, 5);
    }

    start() {
        const simulator = new SimulatorHelper(this.board);
        const Cli = new CliHelper();

        Cli.loadCommands(config.commands);

        Cli.run(Cli.commands, simulator);

    }
}

module.exports = ToyRobot;