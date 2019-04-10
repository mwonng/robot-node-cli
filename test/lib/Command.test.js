const test = require('ava');
const Robot = require('../../src/lib/Robot');
const command = require('../../src/lib/Command');
const Table = require('../../src/lib/Table');
const sinon = require('sinon');

test.beforeEach(t => {
    let table = new Table(5,5);
    let robot = new Robot(table);
    t.context.robot = robot;
});

test("command turn() LEFT", t => {
    let Action = command('left');
    let left = new Action();
    let robot = t.context.robot;
    robot.setPosition(1,1, 'EAST');
    robot.setIsPlaced();
    left.do('',robot);
    t.is(robot.facing, 'NORTH');
});

test("command turn() RIGHT", t => {
    let Action = command('right');
    let right = new Action();
    let robot = t.context.robot;
    robot.setPosition(1,1, 'EAST');
    robot.setIsPlaced();
    right.do('',robot);
    t.is(robot.facing, 'SOUTH');
});

test('place() should be placed when position is valid', t => {
    let robot = t.context.robot;
    let Action = command('place');
    let place = new Action();
    place.do({x:3, y:2, direction: 'NORTH'}, robot);

    t.deepEqual(robot.current, [3, 2]);
    t.is(robot.facing, 'NORTH');
});

test('place() should NOT be placed when position is invalid', t => {
    let robot = t.context.robot;
    let Action = command('place');
    let place = new Action();
    console.error = sinon.spy();

    place.do({x:17, y:2, direction: 'NORTH'}, robot);
    t.deepEqual(robot.current, []);
    t.is(robot.facing, undefined);
    t.true(console.error.called);
});

test('place() should be update when position is already call', t => {
    let robot = t.context.robot;
    let Action = command('place');
    let place = new Action();
    place.do({x:3, y:2, direction: 'NORTH'}, robot);
    place.do({x:0, y:0, direction: 'SOUTH'}, robot);

    t.deepEqual(robot.current, [0, 0]);
    t.is(robot.facing, 'SOUTH');
});

test('move() facing EAST alone until right side', t => {
    let robot = t.context.robot;
    let Action = command('move');
    let move = new Action();

    robot.setPosition(0, 0, 'EAST');
    robot.setIsPlaced();
    for (let i = 0; i < 10; i++) {
        move.do('', robot);
    }
    t.deepEqual(robot.current, [4, 0]);
    t.is(robot.facing, 'EAST');
});

test('move() facing WEST alone until left side', t => {
    let robot = t.context.robot;
    let Action = command('move');
    let move = new Action();

    robot.setPosition(4, 0, 'WEST');
    robot.setIsPlaced();
    for (let i = 0; i < 10; i++) {
        move.do('', robot);
    }
    t.deepEqual(robot.current, [0, 0]);
    t.is(robot.facing, 'WEST');
});

test('move() facing NORTH alone until top side', t => {
    let robot = t.context.robot;
    let Action = command('move');
    let move = new Action();

    robot.setPosition(4, 0, 'NORTH');
    robot.setIsPlaced();
    for (let i = 0; i < 10; i++) {
        move.do('', robot);
    }
    t.deepEqual(robot.current, [4, 4]);
    t.is(robot.facing, 'NORTH');
});

test('move() facing SOUTH alone until bottom side', t => {
    let robot = t.context.robot;
    let Action = command('move');
    let move = new Action();

    robot.setPosition(4, 4, 'SOUTH');
    robot.setIsPlaced();
    for (let i = 0; i < 10; i++) {
        move.do('', robot);
    }
    t.deepEqual(robot.current, [4, 0]);
    t.is(robot.facing, 'SOUTH');
});

test('report()', t => {
    let robot = t.context.robot;
    let Action = command('report');
    let report = new Action();

    console.log = sinon.spy();
    robot.setPosition(1,1, 'SOUTH');
    robot.setIsPlaced();
    report.do('', robot);
    t.true(console.log.called);
});

test('report() without Place', t => {
    let robot = t.context.robot;
    let Action = command('report');
    let report = new Action();

    console.log = sinon.spy();
    report.do('', robot);
    t.false(console.log.called);
});