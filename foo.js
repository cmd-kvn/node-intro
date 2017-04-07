const fs = require('fs');

fs.readFile('package.json', function (err, data) {
    if (err) throw err; // err is an error object 
    // 'throw err' will stop execution
    console.log(data);
})
console.log('springbreak');
