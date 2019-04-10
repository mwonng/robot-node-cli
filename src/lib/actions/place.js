class Place {
    do(params, robot) {
        let x = parseInt(params.x, 10);
        let y = parseInt(params.y, 10);
        if (robot.table.validLocation(x, y)) {
            robot.setPosition(x, y, params.direction);
            robot.setIsPlaced();
        } else {
            console.log("Place a wrong position!");
        }
    }

}

module.exports = Place;