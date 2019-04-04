const test = require('ava');
const TableHelper = require('../src/helpers/Table');
const SimulatorHelper = require('../src/helpers/Simulator');
const sinon = require('sinon');

test.beforeEach(t => {
    let table = new TableHelper();
    t.context.simulator = new SimulatorHelper(table);
});

test('place() should be place when position is valid', t => {
    t.context.simulator.place(3,2, 'NORTH');
    let expect = {x:3, y:2, facing: 'NORTH'};
    t.deepEqual(t.context.simulator.current, expect);
});

test('place() should NOT be placed when position is invalid', t => {
    t.context.simulator.place(5,7, 'NORTH');
    t.deepEqual(t.context.simulator.current, {});
});

test('isPlaced() is FALSE if nothing command called', t => {
    t.is(t.context.simulator.isPlaced, false);
});

test('isPlaced() is FALSE if some command rather than place()', t => {
    t.context.simulator.move();
    t.context.simulator.turnLeft();
    t.is(t.context.simulator.isPlaced, false);
});

test('isPlaced() is TRUE if valid place() called', t => {
    t.context.simulator.place(1,1,'NORTH');
    t.context.simulator.turnLeft();
    t.is(t.context.simulator.isPlaced, true);
});

test('isPlaced() is FALSE if invalid place() called', t => {
    t.context.simulator.place(6,9, 'WEST');
    t.context.simulator.turnLeft();
    t.is(t.context.simulator.isPlaced, false);
});

test('invalid move() facing WEST with  should be ignore', t => {
    t.context.simulator.place(0,0, 'WEST');
    t.context.simulator.move();
    let expect = {x:0, y:0, facing: 'WEST'};
    t.deepEqual(t.context.simulator.current, expect);
});

test('invalid move() facing SOUTH should be ignore', t => {
    t.context.simulator.place(1,0, 'SOUTH');
    t.context.simulator.move();
    let expect = {x:1, y:0, facing: 'SOUTH'};
    t.deepEqual(t.context.simulator.current, expect);
});

test('invalid move() facing EAST should be ignore', t => {
    t.context.simulator.place(4,0, 'EAST');
    t.context.simulator.move();
    let expect = {x:4, y:0, facing: 'EAST'};
    t.deepEqual(t.context.simulator.current, expect);
});

test('invalid move() facing NORTH should be ignore', t => {
    t.context.simulator.place(1,4, 'NORTH');
    t.context.simulator.move();
    let expect = {x:1, y:4, facing: 'NORTH'};
    t.deepEqual(t.context.simulator.current, expect);
});

test('valid move() facing EAST should be works', t => {
    t.context.simulator.place(0,0, 'EAST');
    t.context.simulator.move();
    let expect = {x:1, y:0, facing: 'EAST'};
    t.deepEqual(t.context.simulator.current, expect);
});

test('valid move() facing WEST should be works', t => {
    t.context.simulator.place(1,0, 'WEST');
    t.context.simulator.move();
    let expect = {x:0, y:0, facing: 'WEST'};
    t.deepEqual(t.context.simulator.current, expect);
});

test('valid move() facing NORTH should be works', t => {
    t.context.simulator.place(1,0, 'NORTH');
    t.context.simulator.move();
    let expect = {x:1, y:1, facing: 'NORTH'};
    t.deepEqual(t.context.simulator.current, expect);
});

test('valid move() facing SOUTH should be works', t => {
    t.context.simulator.place(1,1, 'SOUTH');
    t.context.simulator.move();
    let expect = {x:1, y:0, facing: 'SOUTH'};
    t.deepEqual(t.context.simulator.current, expect);
});

test('turnLeft()', t => {
    t.context.simulator.place(1,1, 'SOUTH');
    t.context.simulator.turnLeft();
    let expect = {x:1, y:1, facing: 'EAST'};
    t.deepEqual(t.context.simulator.current, expect);
});

test('turnLeft() without Place should be invalid', t => {
    t.context.simulator.turnLeft();
    t.deepEqual(t.context.simulator.current, {});
});

test('turnRight()', t => {
    t.context.simulator.place(1,1, 'SOUTH');
    t.context.simulator.turnRight();
    let expect = {x:1, y:1, facing: 'WEST'};
    t.deepEqual(t.context.simulator.current, expect);
});

test('turnRight() without Place should be invalid', t => {
    t.context.simulator.turnRight();
    t.deepEqual(t.context.simulator.current, {});
});

test('invalid()', t => {
    console.error = sinon.spy();
    t.context.simulator.invalid('command');
    t.true(console.error.called);
});

test('report()', t => {
    console.log = sinon.spy();
    t.context.simulator.place(1,1, 'SOUTH');
    t.context.simulator.report();
    t.true(console.log.called);
});

test('report() without Place', t => {
    console.log = sinon.spy();
    t.context.simulator.report();
    t.false(console.log.called);
});