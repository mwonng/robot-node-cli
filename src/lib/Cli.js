// const Command = require('./Command');
const fs = require('fs');
const action = require('./Actions');

class Cli {
    loadCommands(filePath) {
        let array = fs.readFileSync(filePath).toString().split("\n");
        let result = array.filter( command => command !== '');
        return result;
    }

    runAll(commands, robot) {
        commands.forEach(command =>{
            this.run(command, robot);
        });
    }

    run(command, robot) {
        let params_reg = /^(?<com>\w+)( (?<x>\d+),(?<y>\d+),(?<direction>\w+))*/i;
        let params = params_reg.test(command) ? params_reg.exec(command).groups : undefined;

        const Action = action(params.com.toLowerCase());
        if (Action !== undefined) {
            const run = new Action(robot);
            run.do(params, robot);
        } else {
            console.error("error Action!");
        }
    }
}

module.exports = Cli;