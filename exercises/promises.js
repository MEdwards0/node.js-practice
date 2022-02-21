const asyncAdd = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num1 === 'number' && typeof num2 === 'number')
                resolve(num1+num2);
            else {
                reject('Arguments must be numbers')
            }
        }, 3000);
    })
}

asyncAdd(5, 7).then((res) => {
    console.log('Result: ',res);
}).catch((errorMessage) => {
    console.log(errorMessage);
})