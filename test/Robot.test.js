const test = require('ava');
const Robot = require('../src/helpers/Robot');

test.beforeEach(t => {
    t.context.robot = new Robot();
});

test('getLocation() should report location', t => {
    t.context.robot.place(1,1,'NORTH');
    let expect = { x:1, y:1, facing: 'NORTH' };
    t.deepEqual(t.context.robot.getLocation(), expect);
});

test('getLocation() should report undfined', t => {
    t.is(t.context.robot.getLocation().x, undefined);
    t.is(t.context.robot.getLocation().y, undefined);
    t.is(t.context.robot.getLocation().facing, undefined);
});

test('place() should have location after called', t => {
    t.context.robot.place(1,1,'NORTH');
    t.is(t.context.robot.x, 1);
    t.is(t.context.robot.y, 1);
    t.is(t.context.robot.facing, 'NORTH');
});

test('moveEast() should work', t => {
    t.context.robot.place(1,1,'EAST');
    t.context.robot.moveEast();
    t.is(t.context.robot.x, 2);
});

test('moveWest() should work', t => {
    t.context.robot.place(1,1,'WEST');
    t.context.robot.moveWest();
    t.is(t.context.robot.x, 0);
});

test('moveNorth() should work', t => {
    t.context.robot.place(1,1,'NORTH');
    t.context.robot.moveNorth();
    t.is(t.context.robot.y, 2);
});

test('moveSouth() should work', t => {
    t.context.robot.place(1,1,'SOUTH');
    t.context.robot.moveSouth();
    t.is(t.context.robot.y, 0);
});

test('move() facing NORTH', t => {
    t.context.robot.place(1,1,'NORTH');
    t.context.robot.move();
    t.is(t.context.robot.y, 2);
    t.is(t.context.robot.facing, 'NORTH');
});

test('move() facing SOUTH', t => {
    t.context.robot.place(1,1,'SOUTH');
    t.context.robot.move();
    t.is(t.context.robot.y, 0);
    t.is(t.context.robot.facing, 'SOUTH');
});

test('move() facing WEST', t => {
    t.context.robot.place(1,1,'WEST');
    t.context.robot.move();
    t.is(t.context.robot.x, 0);
    t.is(t.context.robot.facing, 'WEST');
});

test('move() facing EAST', t => {
    t.context.robot.place(1,1,'EAST');
    t.context.robot.move();
    t.is(t.context.robot.x, 2);
    t.is(t.context.robot.facing, 'EAST');
});


test('turnLeft()', t => {
    t.context.robot.place(1,1,'EAST');
    t.context.robot.turnLeft();
    t.is(t.context.robot.facing, 'NORTH');
});

test('turnRight()', t => {
    t.context.robot.place(1,1,'EAST');
    t.context.robot.turnRight();
    t.is(t.context.robot.facing, 'SOUTH');
    t.pass();
});

