function executor(toNumber) {
    var result = '42'
    return toNumber(result);
}

function toNumber(param) {
    return Number(param);
}

console.log(executor(toNumber));

// Anonymous function syntax

console.log(executor(function (param) {
    return Number(param);
}));

// Arrow syntax
// if only 1 argument, then need no brackets
// if 0 or more than one, then you need brackets and curly brackets
// if 1 parameter only and has a return, you can ommit the return statement.

console.log(executor(param => Number(param)));