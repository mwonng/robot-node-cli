const Command = require('./Command');
const fs      = require('fs');

class Cli {
    loadCommands(filePath) {
        let array = fs.readFileSync(filePath).toString().split("\n");
        let result = array.filter( command => command !== '');
        return result;
    }

    run(commands, rebot) {
        commands.forEach(command =>{
            Command.run(command, rebot);
        });
    }
}

module.exports = Cli;