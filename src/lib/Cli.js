// const Command = require('./Command');
const fs = require('fs');
const comm = require('./Command');
const func = require('../utils/func');
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

        const Action = comm(params.com.toLowerCase());
        if (Action !== undefined) {
            const run = new Action(robot);
            run.do(params, robot);
        } else {
            func.error("Error command!");
        }
    }
}

module.exports = Cli;