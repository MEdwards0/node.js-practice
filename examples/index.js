const col = require('colors');
// We need to require the locally installed package. This should also be stored in a constant variable.

// import col from 'colors'; // ES6 stuff. <- This won't work
// import { message, message2, doSomething } from './messageHolder'; // <- This won't work

const msg = require('./messageHolder');

console.log('A message'.green);
console.log(msg.message.red);

console.log(msg.message2.cyan);
console.log(msg.doSomething().yellow);
