const getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Matt'
    }
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(1, userObject => console.log(userObject));


