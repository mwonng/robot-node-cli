const func = require('../utils/func');
class Robot {
    constructor(table) {
        this.table    = table;
        this.isPlaced = false;
        this.current = [];
    }

    getX() {
        return this.current[0];
    }

    getY() {
        return this.current[1];
    }

    setPosition(x, y, facing) {
        this.current = [x, y];
        this.facing = facing;
    }

    getIsPlaced() {
        return this.isPlaced;
    }

    setIsPlaced() {
        this.isPlaced = true;
    }
}

module.exports = Robot;