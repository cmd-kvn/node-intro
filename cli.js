// this is the code that will let us interact with our calculator(.js) from the command line

const optionsParser = require('./optionsParser');
const calculator = require('./calculator');

const argv = process.argv; // the array of strings of all inputs in the command line
const options = optionsParser(process.argv.slice(2));

if(options.func === 'add'){
    let result = calculator.add(options.x, options.y);
    console.log('add result is', result);
}

if(options.func === 'divide'){
    let result = calculator.divide(options.x, options.y);
    console.log('divide result is', result);
}
