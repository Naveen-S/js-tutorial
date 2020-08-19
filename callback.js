/* 
    What is callback?
        - Its just a mechanism to tell a function to call back when its done with its processing.

        - And no callbacks are not asynchronous by themselves.
*/

// Example 1
function doAsyncTask(cb) {
    cb();
}
doAsyncTask(() => {console.log(message)});
var message = 'Carolina Marine';


// Example 2
function doAsyncTask2(cb) {
    setTimeout(cb, 0);
}
doAsyncTask2(() => {console.log(message2)});
var message2 = 'Anthony Ginting here!';

// Example 3
function doAsyncTask3(cb) {
    setTimeout(() => {cb(null, message3)}, 0);
}

// Error first callback, always have the first param as error.
doAsyncTask3((err, data) => {
    if(err) {
        throw err;
    } else {
        console.log('data: ', data);
    }
});
var message3 = 'Tai Tzu Ying is the best!';


