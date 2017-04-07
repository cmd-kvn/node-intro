'use strict'

module.exports = function (options){
    const func = options[0];
    const x = parseInt(options[1]);
    const y = parseInt(options[2]);

    if(isNaN(x) || isNaN(y)){
        throw new Error('your string trippin, son')
    }
    return {
        func,
        x, 
        y
    }
}