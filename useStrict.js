"use strict"

// Makes debugging easier and place your code in strict mode.

// case 1
// Catch typos
var theVal = 0;
thVal = 1;

if(theVal > 0) {
    console.log("Print hello!");
}


// eval don't pollute the global scope.
// case 2
var a = 10;
eval("var a = 100");
console.log("a: ", a); // In non-strict mode a:100 in strict mode a:10

// Shouldn't be delete variable and methods
// case 3
var temp = 10;
delete temp; // Throws error

function fun () {
    return 'very funny';
}
delete fun; // Throws error
console.log(fun());

function fun2 (args) {
    // Not allowed
    delete args;
}

// Don't use reserve words
var let = 1;  // let is a reserved word.