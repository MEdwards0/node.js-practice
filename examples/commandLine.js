var args = process.argv;

// console.log(args[2]);

// for (let i = 2; i < args.length; i++) {
//     console.log(args[i]);
    
// }

console.log(args.slice(2));

console.log('The first value is ' + args[2]);

// ES6 template strings - use "backticks" or "oblique quotes";

console.log(`the second value is ${args[3]}`);

// Arrow function (anonymous function)
args.forEach(element => {
    console.log(element);
});
