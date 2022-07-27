const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is the data')
    }, 2000);
}

getDataCallback((err, data) => {
    if (err) {

    } else {
        console.log(data);
    }
});

//promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided');
    }, 2000);
});

// const promise = getDataPromise(123);

// promise.then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });


//Promise chaining
getDataPromise('10').then((data) => {
    return getDataPromise(data);
}).then((data) => {
    return getDataPromise(data);
}).then((data) => {
    console.log(data);
}).catch((err)=>{
    console.log(err);
});