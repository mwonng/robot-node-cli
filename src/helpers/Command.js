const error = require('../func/error');
class Command {
    static run(command, simulator) {
        switch (true) {
            case /^PLACE (?<x>\d+),(?<y>\d+),(?<direction>\w+)$/.test(command):
                {
                    let {x, y, direction} = /^PLACE (?<x>\d+),(?<y>\d+),(?<direction>\w+)$/gi.exec(command).groups;
                    simulator.place(x, y, direction);
                }
                break;
            case /^MOVE$/gi.test(command):
                {
                    simulator.move();
                }
                break;
            case /^LEFT$/gi.test(command):
                {
                    simulator.turnLeft();
                }
                break;
            case /^RIGHT$/gi.test(command):
                {
                    simulator.turnRight();
                }
                break;
            case /^REPORT$/gi.test(command):
                {
                    simulator.report();
                }
                break;
            default:
                error("Invalid command in commands file!");
                process.exit(1);
        }
    }

}


module.exports = Command;