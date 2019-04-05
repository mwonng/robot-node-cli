const test = require('ava');
const TableService = require('../../src/lib/Table');

test.before( t=>{
    t.context.table = new TableService(5,5);
});

test('validLocation() in the table should be true', t => {
    let table = t.context.table;

    t.is(table.validLocation(4, 4), true);
    t.is(table.validLocation(0, 0), true);
    t.is(table.validLocation(5, 0), false);
    t.is(table.validLocation(5, 8), false);
});

test('validLocation() beyond the table should be false', t => {
    let table = t.context.table;

    t.is(table.validLocation(5, 0), false);
    t.is(table.validLocation(5, 8), false);
});

test('validLocation() table horizontal position is NOT in the table should be false ', t => {
    let table = t.context.table;

    t.is(table.validLocation(-1, 4), false);
    t.is(table.validLocation(8, 0), false);
});

test('validLocation() table vertical position is NOT in the table should be false ', t => {
    let table = t.context.table;

    t.is(table.validLocation(0, -1), false);
    t.is(table.validLocation(0, 8), false);
});