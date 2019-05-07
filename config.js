
const config = {
    commands: process.cwd() + '/commands.txt',
    vectorSteps: {
        'NORTH' : [0,1],
        'EAST'  : [1,0],
        'SOUTH' : [0,-1],
        'WEST'  : [-1,0]
    },
};
config.directions = Object.keys(config.vectorSteps),


module.exports = config;