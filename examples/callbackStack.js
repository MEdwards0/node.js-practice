// message 1
console.log('Starting timeouts');

// set timeout 1
setTimeout(() => {
    console.log('First Callback');
}, 3000);

// set timeout 2

setTimeout(() => {
    console.log('Second callback');
}, 0);

// message 2

console.log('Finshed Timeouts')