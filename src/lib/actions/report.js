const Command = require('../Command');
class Report extends Command {
    constructor() {
        super();
    }

    do(params, robot) {
        let {current, facing} = robot;
        if (robot.getIsPlaced() == true) {
            console.log(`ROBOT locate at: ${current[0]},${current[1]},${facing}`);
        }
    }
}

module.exports = Report;