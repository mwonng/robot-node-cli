const Command = require('./Command');
var fs = require('fs');

class Cli {
    constructor() {
        this.commands = [];
    }

    loadCommands(filePath) {
        var array = fs.readFileSync(filePath).toString().split("\n");
        this.commands = array;
    }

    run(commands, simulator) {
        commands.forEach(command =>{
            Command.run(command, simulator);
        });
    }
}

module.exports = Cli;