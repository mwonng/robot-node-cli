const test = require('ava');
const TableHelper = require('../src/helpers/Table');
const Robot = require('../src/helpers/Robot');
const sinon = require('sinon');

test.beforeEach(t => {
    let table = new TableHelper();
    t.context.robot = new Robot(table);
});

test('place() should be place when position is valid', t => {
    t.context.robot.place(3,2, 'NORTH');

    t.deepEqual(t.context.robot.current, [3, 2]);
    t.is(t.context.robot.facing, 'NORTH');
});

test('place() should NOT be placed when position is invalid', t => {
    t.context.robot.place(5,7, 'NORTH');

    t.deepEqual(t.context.robot.current, []);
    t.is(t.context.robot.facing, undefined);
});

test('isPlaced() is FALSE if nothing command called', t => {
    t.is(t.context.robot.isPlaced, false);
});

test('isPlaced() is FALSE if some command rather than place()', t => {
    t.context.robot.move();
    t.context.robot.turn('LEFT');
    t.is(t.context.robot.isPlaced, false);
});

test('isPlaced() is TRUE if valid place() called', t => {
    t.context.robot.place(1,1,'NORTH');
    t.context.robot.turn('LEFT');
    t.is(t.context.robot.isPlaced, true);
});

test('isPlaced() is FALSE if invalid place() called', t => {
    t.context.robot.place(6,9, 'WEST');
    t.context.robot.turn('LEFT');
    t.is(t.context.robot.isPlaced, false);
});

test('invalid move() facing WEST with  should be ignore', t => {
    t.context.robot.place(0, 0, 'WEST');
    t.context.robot.move();
    t.deepEqual(t.context.robot.current, [0, 0]);
    t.is(t.context.robot.facing, 'WEST');
});

test('invalid move() facing SOUTH should be ignore', t => {
    t.context.robot.place(1,0, 'SOUTH');
    t.context.robot.move();

    t.deepEqual(t.context.robot.current, [1, 0]);
    t.is(t.context.robot.facing, 'SOUTH');
});

test('invalid move() facing EAST should be ignore', t => {
    t.context.robot.place(4,0, 'EAST');
    t.context.robot.move();

    t.deepEqual(t.context.robot.current,  [4, 0]);
    t.is(t.context.robot.facing, 'EAST');
});

test('invalid move() facing NORTH should be ignore', t => {
    t.context.robot.place(1,4, 'NORTH');
    t.context.robot.move();

    t.deepEqual(t.context.robot.current, [1, 4]);
    t.is(t.context.robot.facing, 'NORTH');
});

test('valid move() facing EAST should be works', t => {
    t.context.robot.place(0,0, 'EAST');
    t.context.robot.move();

    t.deepEqual(t.context.robot.current, [1, 0]);
    t.is(t.context.robot.facing, 'EAST');
});

test('valid move() facing WEST should be works', t => {
    t.context.robot.place(1,0, 'WEST');
    t.context.robot.move();

    t.deepEqual(t.context.robot.current, [0, 0]);
    t.is(t.context.robot.facing, 'WEST');
});

test('valid move() facing NORTH should be works', t => {
    t.context.robot.place(1,0, 'NORTH');
    t.context.robot.move();

    t.deepEqual(t.context.robot.current, [1, 1]);
    t.is(t.context.robot.facing, 'NORTH');
});

test('valid move() facing SOUTH should be works', t => {
    t.context.robot.place(1,1, 'SOUTH');
    t.context.robot.move();

    t.deepEqual(t.context.robot.current, [1, 0]);
    t.is(t.context.robot.facing, 'SOUTH');
});

test('turn() LEFT', t => {
    t.context.robot.place(1,1, 'SOUTH');
    t.context.robot.turn('LEFT');

    t.deepEqual(t.context.robot.current, [1, 1]);
    t.is(t.context.robot.facing, 'EAST');
});

test('turn() LEFT without Place should be invalid', t => {
    t.context.robot.turn('LEFT');
    t.deepEqual(t.context.robot.current, []);
    t.is(t.context.robot.facing, undefined);
});

test('turn() RIGHT', t => {
    t.context.robot.place(1,1, 'SOUTH');
    t.context.robot.turn('RIGHT');

    t.deepEqual(t.context.robot.current, [1, 1]);
    t.is(t.context.robot.facing, 'WEST');
});

test('turn() RIGHT without Place should be invalid', t => {
    t.context.robot.turn('RIGHT');

    t.deepEqual(t.context.robot.current, []);
    t.is(t.context.robot.facing, undefined);
});

test('invalid()', t => {
    console.error = sinon.spy();
    t.context.robot.invalid('command');
    t.true(console.error.called);
});

test('report()', t => {
    console.log = sinon.spy();
    t.context.robot.place(1,1, 'SOUTH');
    t.context.robot.report();
    t.true(console.log.called);
});

test('report() without Place', t => {
    console.log = sinon.spy();
    t.context.robot.report();
    t.false(console.log.called);
});