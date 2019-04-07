const Command = require('./Command');
const fs      = require('fs');

class Cli {
    loadCommands(filePath) {
        var array = fs.readFileSync(filePath).toString().split("\n");
        return array;
    }

    run(commands, rebot) {
        commands.forEach(command =>{
            Command.run(command, rebot);
        });
    }
}

module.exports = Cli;