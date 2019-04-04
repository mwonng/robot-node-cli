const test = require('ava');
const func = require('../src/func/func');
const error = require('../src/func/error');
const sinon = require('sinon');

test('arrayRotateLeft() should works', t => {
    const array = ['a', 'b', 'c', 'd'];
    let expect = ['b', 'c', 'd', 'a'];
    t.deepEqual(func.arrayRotateLeft(array), expect);
});

test('arrayRotateRight() should works', t => {
    const array = ['a', 'b', 'c', 'd'];
    let expect = ['d', 'a', 'b', 'c'];
    t.deepEqual(func.arrayRotateRight(array), expect);
});

test('turnDirection() LEFT should works', t => {
    const current_direction = 'EAST';
    let turn_to = 'LEFT';
    let expect = 'NORTH';
    t.is(func.turnDirection(current_direction, turn_to), expect);
});

test('turnDirection() RIGHT should works', t => {
    const current_direction = 'EAST';
    let turn_to = 'RIGHT';
    let expect = 'SOUTH';
    t.is(func.turnDirection(current_direction, turn_to), expect);
});

test('error() should works', t => {
    console.error = sinon.spy();
    error('command');
    t.true(console.error.called);
});

test('error() and exit works', t => {
    process.exit = sinon.spy();
    error('command', true);
    t.true(process.exit.called);
});





