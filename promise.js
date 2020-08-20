
const doAsyncTask = () => {
    const promise = new Promise((resolve, reject) => {
        console.log('Async task completed');
        if(false){
            resolve('Async data');
        } else {
            reject('Something went wrong!');
        }
    });
    return promise;
}

// Using then and catch to capture success(resolve) & failure(reject)
doAsyncTask().then((data) => {
    console.log('Got data: ', data);
}).catch((err) => {
    console.log('Error: ', err);
});


/* using second param to then to capture reject */
doAsyncTask().then((data) => {
    console.log('Got data: ', data);
}, (err) => {
    console.log('Without using catch ', err);
})

console.log('----------------------------------------');

// promise way
const doAsyncTask1 = () => {
    const promise = new Promise((resolve, reject) => {
        console.log('Async task completed');
        setTimeout(() => {
            resolve('Found data!');
        }, 5000);
    });
    return promise;
}

console.log(doAsyncTask1());

doAsyncTask1().then((data) => {
    console.log('Got data: ', data);
}).catch((err) => {
    console.log('Error: ', err);
});

console.log('----------------------------------------');

// callback way
const doAsyncTask2 = (cb) => {
    setTimeout(()=> {
        cb();
    }, 5000);
}

doAsyncTask2(() => {console.log('Completed')});

console.log('----------------------------------------');


/* 
    Immediately resolve or rejected Promise
*/
let promise = Promise.resolve('done!');
// promise = Promise.reject('Errrr!');

promise.then((val) => {console.log(val)});

console.log('----------------------------------------');

/* 
    Promise is 100% asynchronous by default but callback are not asunchronous by default.
*/

function doAsyncTask4() {
    return Promise.resolve();
}

doAsyncTask4().then(() => { console.log(message)});
let message = 'blah blah blah';

console.log('----------------------------------------');
