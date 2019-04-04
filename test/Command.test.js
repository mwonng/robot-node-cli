const test = require('ava');
const Simulator = require('../src/helpers/Simulator');
const Command = require('../src/helpers/Command');
const TableHelper = require('../src/helpers/Table');
const sinon = require('sinon');

test.beforeEach(t => {
    let table = new TableHelper();
    t.context.simulator = new Simulator(table);
});

test('run() valid command', async t => {
    Command.run('PLACE 1,1,NORTH', t.context.simulator);
    t.deepEqual(t.context.simulator.current, {x:1, y:1, facing: 'NORTH'});
    Command.run('RIGHT', t.context.simulator);
    t.deepEqual(t.context.simulator.current, {x:1, y:1, facing: 'EAST'});
    Command.run('MOVE', t.context.simulator);
    t.deepEqual(t.context.simulator.current, {x:2, y:1, facing: 'EAST'});
    Command.run('MOVE', t.context.simulator);
    t.deepEqual(t.context.simulator.current, {x:3, y:1, facing: 'EAST'});
    Command.run('LEFT', t.context.simulator);
    t.deepEqual(t.context.simulator.current, {x:3, y:1, facing: 'NORTH'});
    Command.run('MOVE', t.context.simulator);
    t.deepEqual(t.context.simulator.current, {x:3, y:2, facing: 'NORTH'});
});

test('run() invalid command', async t => {
    console.error = sinon.spy();
    Command.run('ERROR', t.context.simulator);
    t.true(console.error.called);
});
