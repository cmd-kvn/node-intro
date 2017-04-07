const assert = require('assert');
const optionsParser = require('../optionsParser');

describe('the optionsParser', () => {
    it('converts arguments to ints', () => {
        let result = optionsParser(['add', '2', '3']);
        // use deepEqual for object or array comparison
        assert.deepEqual({ func: 'add', x: 2, y: 3 }, result);
    });

    it('throws an error if arguments are not ints', () => {
        assert.throws(
            () => {
                let result = optionsParser(['add', 'foo', 2]);       
            },
            /trippin/
        );
    });
});