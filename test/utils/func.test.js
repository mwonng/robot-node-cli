const test = require('ava');
const func = require('../../src/utils/func');
const sinon = require('sinon');

test('error() should works', t => {
    console.error = sinon.spy();
    func.error('command');
    t.true(console.error.called);
});

test('error() and exit works', t => {
    process.exit = sinon.spy();
    func.error('command', true);
    t.true(process.exit.called);
});


test('keepInRange() works', t => {
    t.is(func.keepInRange(4, 0, 5), 4);
    t.is(func.keepInRange(7, 0, 5), 5);
    t.is(func.keepInRange(-1, 0, 5), 0);
});
