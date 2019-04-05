const test = require('ava');
const Cli = require('../src/lib/Cli');
const Robot = require('../src/lib/Robot');
const Table = require('../src/lib/Table');
const sinon = require('sinon');

test.before( t => {
    t.context.cli = new Cli();
    t.context.rebot = new Robot(new Table());
});

test('loadCommands()', t => {
    let result = t.context.cli.loadCommands('./test/test_commands/test1.txt');
    let expect = [
        'PLACE 0,0,NORTH',
        'MOVE',
        'REPORT'
    ];
    t.deepEqual(result, expect);
});

test('run() test case 1', t => {
    let commands = [
        'PLACE 0,0,NORTH',
        'MOVE',
        'REPORT'
    ];
    console.log = sinon.spy();
    t.context.cli.run(commands, t.context.rebot);
    t.deepEqual(t.context.rebot.current, [0, 1]);
    t.is(t.context.rebot.facing, 'NORTH');
    t.true(console.log.called);
});

test('run() test case 2', t => {
    let commands = [
        'PLACE 0,0,NORTH',
        'LEFT',
        'REPORT'
    ];
    console.log = sinon.spy();
    t.context.cli.run(commands, t.context.rebot);
    t.deepEqual(t.context.rebot.current, [0, 0]);
    t.is(t.context.rebot.facing, 'WEST');
    t.true(console.log.called);
});

test('run() test case 3', t => {
    let commands = [
        'PLACE 1,2,EAST',
        'MOVE',
        'MOVE',
        'LEFT',
        'MOVE',
        'REPORT'
    ];
    console.log = sinon.spy();
    t.context.cli.run(commands, t.context.rebot);
    t.deepEqual(t.context.rebot.current, [3, 3]);
    t.is(t.context.rebot.facing, 'NORTH');
    t.true(console.log.called);
});