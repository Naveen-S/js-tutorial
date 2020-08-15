"use strict"

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2, 3, 4));


// How to capture all the arguments

function sum1(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(sum1(1, 2, 3, 4));


function login(method, options) {
    console.log('method ', method);
    console.log('options ', options);
    // let's use arguments
    // options = arguments.slice(1); // arguments is not an array, duh!
}   
login("facebook", 1 , 2, 3, 4);


// Use Rest operator
function login1(method, ...options) {
    console.log("In Login using rest operator");
    console.log('method: ', method);
    console.log('options: ', options);
}
login1("facebook", 1 , 2, 3, 4);
