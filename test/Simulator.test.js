const test = require('ava');
const TableHelper = require('../src/helpers/Table');
const SimulatorHelper = require('../src/helpers/Simulator');


test('place() should be place when position is valid', t => {
    let table = new TableHelper();
    let Simulator = new SimulatorHelper(table);

    Simulator.place(3,2, 'NORTH');
    let expect = {x:3, y:2, facing: 'NORTH'};
    t.deepEqual(Simulator.current, expect);
});

test('place() should NOT be placed when position is invalid', t => {
    let table = new TableHelper();
    let Simulator = new SimulatorHelper(table);

    Simulator.place(5,7, 'NORTH');

    t.deepEqual(Simulator.current, {});
});

test('isPlaced() is FALSE if nothing command called', t => {
    let table = new TableHelper();
    let Simulator = new SimulatorHelper(table);
    t.is(Simulator.isPlaced, false);
});

test('isPlaced() is FALSE if some command rather than place()', t => {
    let table = new TableHelper();
    let Simulator = new SimulatorHelper(table);
    Simulator.move();
    Simulator.turnLeft();
    t.is(Simulator.isPlaced, false);
});

test('isPlaced() is TRUE if valid place() called', t => {
    let table = new TableHelper();
    let Simulator = new SimulatorHelper(table);
    Simulator.place(1,1,'NORTH');
    Simulator.turnLeft();
    t.is(Simulator.isPlaced, true);
});

test('isPlaced() is FALSE if invalid place() called', t => {
    let table = new TableHelper();
    let Simulator = new SimulatorHelper(table);
    Simulator.place(6,9, 'WEST');
    Simulator.turnLeft();
    t.is(Simulator.isPlaced, false);
});

test('move()', t => {

    t.pass();
});

test('turnLeft()', t => {

    t.pass();
});

test('turnRight()', t => {

    t.pass();
});

test('report()', t => {

    t.pass();
});

test('invalid()', t => {

    t.pass();
});
