/* 
    What is hoisting?
        -  Moving something to the top of its scope.
    
        In case of variable hoisting, variable declaration will be moved to the top of its scope.
        In case of function hoisting, function definition will be moved to the top of its scope.
*/


"use strict"

// variable hoisting.
console.log(a);
var a = 100;

/* 
The above code will be converted as below by JS engine.
var a;
console.log(a);
a = 100;
*/

// function hoisting
fun();
function fun() {
    console.log('Its so much fun!');
}

/* 
Internally:

function fun() {
    console.log('Its so much fun!');
}
fun();

*/


// more variable hoisting
function foo() {
    console.log(b);
    var b = 'bar';
}

// console.log(b); 
/* 
    The above statement throws an error because variables are hoisted to the top of its scope. 
    Scope of b is that enclosing foo function not the window. That's why access b outside it scope causes JS to throw error.
*/


// more hoisting

// c(); // This throws an error
var c = function () {
    console.log('What the c?');
}
/* 
    Internally:
    var c;
    c();
    c = function () {
        console.log('What the c?');
    }
*/
