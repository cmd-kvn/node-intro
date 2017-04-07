'use strict'

// this needs to be exported if it needs to be used in another file
const foo = () => { return 'foo'; }

/* only things that are exported can be used/imported in other files */
module.exports = {
    add: (operands) => {
        let sum = operands.reduce(function (acc, curr) {
            acc += curr;
            return acc;
        }, 0);

        return sum;
    },
    foo, // es6 for foo: foo
    divide: (x, y) => { return x / y }


}