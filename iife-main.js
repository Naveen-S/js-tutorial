/* 
    IIFE is an immediately innvoked function expression.
    IIFE is used so that we don't pollute the global scope.
    In the below example, thing is written in global scope which can be easily altered by some other js file 
    just because its in global scope, in order to avoid that we can make use of IIFE which does everything we want 
    but in its own function scope (myThing).
*/


// Without IIFE
var thing = {name: 'main'};
console.log('thing in main: ', thing);

// with IIFE
(function() {
    var myThing = {gender: 'Male'};
    console.log('myThing in main: ', myThing);
})()


