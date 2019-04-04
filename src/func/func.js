const func = {
    arrayRotateLeft: (arr) => {
        let first = arr.shift();
        return [...arr, first];
    },

    arrayRotateRight: (arr) => {
        let last = arr.pop();
        return [last,...arr];
    },

    turnDirection: (current_direction, turn_to) => {
        let directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
        let current_index = directions.indexOf(current_direction);

        if (turn_to === "LEFT") {
            return func.arrayRotateRight([...directions])[current_index];
        } else {
            return func.arrayRotateLeft([...directions])[current_index];
        }
    },

    output: (message) => {
        console.log(message);
    }
};

module.exports = func;