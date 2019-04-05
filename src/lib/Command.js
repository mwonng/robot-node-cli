class Command {
    static run(command, robot) {
        switch (true) {
            case /^PLACE (?<x>\d+),(?<y>\d+),(?<direction>\w+)$/gi.test(command) : {
                let { x, y, direction } = /^PLACE (?<x>\d+),(?<y>\d+),(?<direction>\w+)$/gi.exec(command).groups;
                robot.place(x, y, direction);
                break;
            }
            case /^MOVE$/gi.test(command) :
                robot.move();
                break;
            case /^LEFT$/gi.test(command) :
                robot.turn(command);
                break;
            case /^RIGHT$/gi.test(command) :
                robot.turn(command);
                break;
            case /^REPORT$/gi.test(command) :
                robot.report();
                break;
            default:
                robot.invalid(command) ;
        }
    }
}

module.exports = Command;