'use strict'

module.exports = function (options){
    const func = options[0];
    const operands = options.slice(1); // slice after options[0] (func)
    const operandsAsInts = operands.map(currentVal => {
        currentVal = parseInt(currentVal);
        if(isNaN(currentVal)) throw new Error ('your string trippin, son');
        return currentVal;
    })

    return {
        func,
        operands: operandsAsInts
    }
}