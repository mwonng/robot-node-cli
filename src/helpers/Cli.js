const Command = require('./Command');
const fs = require('fs');
const error = require('../func/error');
class Cli {
    constructor() {
        this.commands = [];
    }

    loadCommands(filePath) {
        var array = fs.readFileSync(filePath).toString().split("\n");
        this.commands = array;
    }

    getLoadedCommands() {
        return this.commands;
    }

    run(commands, simulator) {
        commands.forEach(command =>{
            Command.run(command, simulator);
        });
    }
}

module.exports = Cli;