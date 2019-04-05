const test = require('ava');
const CliHelper = require('../src/helpers/Cli');
const Robot = require('../src/helpers/Robot');
const TableHelper = require('../src/helpers/Table');

test.before( t => {
    t.context.cli = new CliHelper();
    t.context.rebot = new Robot(new TableHelper());
});

test('loadCommands()', t => {
    t.context.cli.loadCommands('./test/test_commands/test1.txt');
    let expect = [
        'PLACE 0,0,NORTH',
        'MOVE',
        'REPORT'
    ];
    t.deepEqual(t.context.cli.commands, expect);
});

test('getLoadedCommands()', t => {
    t.context.cli.loadCommands('./test/test_commands/test1.txt');
    let expect = [
        'PLACE 0,0,NORTH',
        'MOVE',
        'REPORT'
    ];
    t.deepEqual(t.context.cli.getLoadedCommands(), expect);
});

test('run()', t => {
    let commands = [
        'PLACE 1,2,EAST',
        'MOVE',
        'MOVE',
        'LEFT',
        'MOVE',
        'REPORT'
    ];
    t.context.cli.run(commands, t.context.rebot);

    t.deepEqual(t.context.rebot.current, [3, 3]);
    t.is(t.context.rebot.facing, 'NORTH');
});