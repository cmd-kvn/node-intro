'use strict'
const assert = require('assert');

const calc = require('../calculator'); // don't need to add file extension(.js)

describe('how the calculator works', () => {
// same as:
// describe('how the calculator works', function () {})
    
    it('knows how to add', () => {
        let result = calc.add(1, 1);
        assert.equal(result, 2); // (actual, expected)
    });

    it('knows how to divide two numbers', () => {
        let result = calc.divide(9, 3);
        assert.equal(result, 9/3);  
    });

    it('knows how to handle division by 0', () => {
        let result = calc.divide(9, 0);
        assert.equal(result, 'Infinity');
    });

    it('knows how to foo', () => {
        let result = calc.foo();
        assert.equal(result, 'foo');
    });



});