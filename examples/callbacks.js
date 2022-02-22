function product(num1, num2, callback) {
    var result = num1 * num2;
    callback(result);
}

// the callback variable stands in as a placeholder for where a function will be called. You can pass in local variables to it.

function print(result) {
    console.log(result);
}

// product(37, 4, print);
// Pass a function (without calling it) as an argument


product(37, 4, arg => 
    console.log(arg)
);


// ^^ This works too.