const test = require('ava');
const TableService = require('../src/helpers/Table');

test('validLocation()', t => {
    const Table = new TableService(5,5);
    t.is(Table.validLocation(4, 4), true);
    t.is(Table.validLocation(0, 0), true);
    t.is(Table.validLocation(5, 0), false);
    t.is(Table.validLocation(5, 8), false);
});