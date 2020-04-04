const Array = require('../src/toFlatten.js');
const assert = require('assert');

it('exists method for arrays', () => {
    assert.equal(typeof Array.prototype.toFlatten, 'function');
})

it('when use empty value', () => {
    var arrays = [];
    let result = arrays.toFlatten();
    assert.equal(Array.isArray(result), true);
    assert.equal(result.length, 0);
})

it('return flatten array from matrix [["6"],[[1,2,3],[4],[[5],[6]]],["12"],["35"],["45", "18", ["52"]]]', () => {
    var arrays = [
        ["6"],[[1,2,3],[4],[[5],[6]]],
        ["12"],
        ["35"],
        ["45", "18", ["52"]],
    ];

    let result = arrays.toFlatten();
    assert.equal(result[0], '6');
    assert.equal(result[1],  1);
    assert.equal(result[2],  2);
    assert.equal(result[3],  3);
    assert.equal(result[4],  4);
    assert.equal(result[5],  5);
    assert.equal(result[6],  6);
    assert.equal(result[10],  '18');
    assert.equal(result[11],  '52');
})