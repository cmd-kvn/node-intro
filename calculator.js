'use strict'

// this needs to be exported if it needs to be used in another file
const foo = () => {return 'foo';}

/* only things that are exported can be used/imported in other files */
module.exports = {
    add: (x, y) => {return x + y},
    foo, // es6 for foo: foo
    divide: (x, y) => {return x/y}


}