const test = require('ava');
const Robot = require('../../src/lib/Robot');
const Command = require('../../src/lib/Command');
const Table = require('../../src/lib/Table');
const sinon = require('sinon');


test.beforeEach(t => {
    t.context.command = new Command();
});


test("command turn() LEFT", t => {
    let command = t.context.command;
    t.is(command.turn('NORTH', 'LEFT'), 'WEST');
});

test("command turn() RIGHT", t => {
    let command = t.context.command;
    t.is(command.turn('NORTH', 'RIGHT'), 'EAST');
});

// test('run() valid command', async t => {

//     Command.run('PLACE 1,1,NORTH', t.context.rebot);

//     t.deepEqual(t.context.rebot.current, [1, 1]);
//     t.is(t.context.rebot.facing, 'NORTH');

//     Command.run('RIGHT', t.context.rebot);
//     t.deepEqual(t.context.rebot.current, [1, 1]);
//     t.is(t.context.rebot.facing, 'EAST');

//     Command.run('MOVE', t.context.rebot);
//     t.deepEqual(t.context.rebot.current, [2, 1]);
//     t.is(t.context.rebot.facing, 'EAST');

//     Command.run('MOVE', t.context.rebot);
//     t.deepEqual(t.context.rebot.current, [3, 1]);
//     t.is(t.context.rebot.facing, 'EAST');

//     Command.run('LEFT', t.context.rebot);
//     t.deepEqual(t.context.rebot.current, [3, 1]);
//     t.is(t.context.rebot.facing, 'NORTH');

//     Command.run('MOVE', t.context.rebot);
//     t.deepEqual(t.context.rebot.current, [3, 2]);
//     t.is(t.context.rebot.facing, 'NORTH');
// });

// test('run() invalid command', async t => {
//     console.error = sinon.spy();
//     Command.run('ERROR', t.context.rebot);
//     t.true(console.error.called);
// });
