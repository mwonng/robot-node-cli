const func = {
    output: (message) => {
        console.log(message);
    },

    error: (message, exit) => {
        console.error(`Error: ${message}`);
        exit && process.exit(1);
    },

    keepInRange: (x, min, max) =>{
        x = Math.max(min, x);
        x = Math.min(max, x);
        return x;
    }
};

module.exports = func;