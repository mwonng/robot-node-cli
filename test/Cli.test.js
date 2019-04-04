const test = require('ava');
const CliHelper = require('../src/helpers/Cli');
// const test_command_1 = require('./test_commands/test1.txt');

test('loadCommands()', t => {
    const cli = new CliHelper();
    cli.loadCommands('./test/test_commands/test1.txt');
    let expect = [
        'PLACE 0,0,NORTH',
        'MOVE',
        'REPORT'
    ];
    t.deepEqual(cli.commands, expect);
    // t.pass();
});

test('run()', t => {

    t.pass();
});