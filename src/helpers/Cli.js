const Command = require('./Command');
const fs = require('fs');

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

    run(commands, rebot) {
        commands.forEach(command =>{
            Command.run(command, rebot);
        });
    }
}

module.exports = Cli;