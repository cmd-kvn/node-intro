const fs = require('fs');

const data = fs.readFileSync('package.json');
console.log(data); // waits for fs.readFileSync to finish before logging 'springbreak'
console.log('springbreak');
/* fs.readFile before console.log('springbreak') will print 'springbreak' before 'data' */
