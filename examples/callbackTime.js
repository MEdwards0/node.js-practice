function doWork(callback) {
    var result = null;
    setTimeout(function() {
        result = "My work here is done.";
        callback(result);
    }, 3000);
}

// var output = doWork();
// console.log(output);

doWork(output => console.log(output))
