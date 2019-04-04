const test = require('ava');
const func = require('../src/func/func');


test('arrayRotateLeft() should work', t => {
    const array = ['a', 'b', 'c', 'd'];
    let expect = ['b', 'c', 'd', 'a'];
    t.deepEqual(func.arrayRotateLeft(array), expect);
});

test('arrayRotateRight() should work', t => {
    const array = ['a', 'b', 'c', 'd'];
    let expect = ['d', 'a', 'b', 'c'];
    t.deepEqual(func.arrayRotateRight(array), expect);
});

test('turnDirection() LEFT should work', t => {
    const current_direction = 'EAST';
    let turn_to = 'LEFT';
    let expect = 'NORTH';
    t.is(func.turnDirection(current_direction, turn_to), expect);
});

test('turnDirection() RIGHT should work', t => {
    const current_direction = 'EAST';
    let turn_to = 'RIGHT';
    let expect = 'SOUTH';
    t.is(func.turnDirection(current_direction, turn_to), expect);
});



