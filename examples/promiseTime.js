function promiseTime(time) {
    return new Promise(function(resolve, reject) {
        if (time > 0) {
            setTimeout(resolve, time);
        } else {
            reject();
        }
    }).then(() => console.log(`Ran setTimeout after ${time}ms`)
    ).catch(() => console.log(`Timeout of ${time}ms is too short`))
};

promiseTime(3000);