"use strict"
// Why spread? Whenever you want to explode

// case 1
var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3, ...arr1];
console.log('arr1 ', arr1);
console.log('arr2 ', arr2);

// case 2
// For copy
var arr3 = [...arr1];
var arr4 = arr1;
arr1[0] = -1;

console.log('arr1 after ', arr1);
console.log('arr3 ', arr3);
console.log('arr4 ', arr4);


// case 3
var methodName = 'facebook';
var opts = ['accesskey', 'callbackUrl'];
function login(method, ...options) {
    console.log('Method ', method);
    console.log('options ', options);
}

// login(methodName, opts);
login(methodName, ...opts);
