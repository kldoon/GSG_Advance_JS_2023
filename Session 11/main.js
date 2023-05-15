const utils = require('./utility.js');
// Other syntax of require
const { PI, capitalizeFirstWord } = require('./utility.js');

console.log(module);

console.log(utils.PI);
console.log(utils.capitalizeFirstWord("hello Mr Ahmad!"));
console.log(capitalizeFirstWord("you are attending advanced javascript course"));