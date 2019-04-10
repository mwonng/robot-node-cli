const config = require('../../config');
const action = require('./actions/index');
class Command {
    constructor() {
    }

    static run(command, robot) {
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

module.exports = Command;