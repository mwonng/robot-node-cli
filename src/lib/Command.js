const config = require('../../config');
const action = require('./actions/index');
class Command {
    constructor() {
    }

    static run(command, robot) {
        let params_reg = /^(?:\w+) (?<x>\d+),(?<y>\d+),(?<direction>\w+)/i;
        let main_comm  = command.match(/^\w+/gi)[0].toLowerCase();

        let params = params_reg.test(command) ? params_reg.exec(command).groups : undefined;
        // let params = params_reg.exec(command).groups;

        // console.log(main_comm);
        // console.log(params);

        const Action = action(main_comm);
        if (Action !== undefined) {
            const run = new Action(robot);
            run.do(params, robot);
        } else {
            console.error("error Action!");
        }
        // Action;

        // new Action('Move');
    //     switch (true) {
    //         case /^PLACE (?<x>\d+),(?<y>\d+),(?<direction>\w+)$/gi.test(command) : {
    //             let { x, y, direction } = /^PLACE (?<x>\d+),(?<y>\d+),(?<direction>\w+)$/gi.exec(command).groups;
    //             robot.place(x, y, direction, config.PLACE);
    //             break;
    //         }
    //         case /^MOVE$/gi.test(command) :
    //             robot.move();
    //             break;
    //         case /^LEFT$/gi.test(command) :
    //             robot.turn(config.LEFT);
    //             break;
    //         case /^RIGHT$/gi.test(command) :
    //             robot.turn(config.RIGHT);
    //             break;
    //         case /^REPORT$/gi.test(command) :
    //             robot.report();
    //             break;
    //         default:
    //             robot.invalid(command) ;
    //     }
    }

}

module.exports = Command;