class Table {
    constructor(x = 5, y = 5) {
        this.row = x;
        this.col = y;
    }

    validLocation(rowIndex, colIndex) {
        return (
            rowIndex >= 0 &&
            rowIndex < this.row &&
            colIndex >= 0 &&
            colIndex < this.col
        );
    }

}

module.exports = Table;