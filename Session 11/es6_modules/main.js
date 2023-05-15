// default import (something) , other imports
// import something from './utility.js';
// import { PI, replaceStr } from './utility.js';
// Merge two imports in one
// import something, { PI, replaceStr as rep } from './utility.js';
import something, { PI, replaceStr as rep } from './utility.js';

console.log(PI);
console.log(rep("Hello Mr Ahmad", "l", "J"));

console.log(something(10, 20));

// if (x > y) {
//   Not allowed
//   import something from './utility.js';
// }


/*
// You can import the entire module
import * as utils from './utility.js';

console.log(utils.PI);
console.log(utils.replaceStr("Hello Mr Ahmad", "l", "J"));

console.log(utils.default(10, 20));
*/