
class Report {
    constructor() {
        this.vectorSteps = {
            'NORTH' : [0,1],
            'EAST'  : [1,0],
            'SOUTH' : [0,-1],
            'WEST'  : [-1,0]
        };
        this.directions = Object.keys(this.vectorSteps);
    }

    do(params, robot) {
        let {current, facing} = robot;
        if (robot.getIsPlaced() == true) {
            console.log(`ROBOT locate at: ${current[0]},${current[1]},${facing}`);
        }
    }
}

module.exports = Report;