const test = require('ava');
const TableHelper = require('../src/lib/Table');
const Robot = require('../src/lib/Robot');
const sinon = require('sinon');
const command = require('../src/lib/Command');

test.beforeEach(t => {
    let table = new TableHelper();
    t.context.robot = new Robot(table);
});

test('isPlaced() is FALSE if nothing command called', t => {
    t.is(t.context.robot.isPlaced, false);
});

test('isPlaced() is FALSE if some command rather than place()', t => {
    let robot = t.context.robot;

    let Left = command('left');
    let left = new Left();
    let Right = command('right');
    let right = new Right();
    let Move = command('move');
    let move = new Move();
    move.do('', robot);
    left.do('', robot);
    t.is(robot.isPlaced, false);
    right.do('', robot);
    t.is(robot.isPlaced, false);
    move.do('', robot);
    t.is(robot.isPlaced, false);
});

test('isPlaced() is TRUE if valid place() called', t => {
    let robot = t.context.robot;

    let Place = command('place');
    let place = new Place();
    let Left = command('left');
    let left = new Left();

    place.do({x:1,y:1, direction: 'NORTH'},robot);
    left.do('', robot);

    t.deepEqual(robot.current, [1, 1]);
    t.is(robot.isPlaced, true);
});

test('isPlaced() is FALSE if invalid place() called', t => {
    let robot = t.context.robot;

    let Place = command('place');
    let place = new Place();
    let Left = command('left');
    let left = new Left();
    console.error = sinon.spy();

    place.do({x:6,y:9, direction: 'NORTH'}, robot);
    left.do('', robot);

    t.is(robot.isPlaced, false);
});
