'use strict';

// let & const are blocked level scope.
for(let i = 0; i < 5; i++) {
    console.log('i inside: ', i);
}
// I don't know what i is here.
// console.log(i);


// function scope. 
function foo() {
    var out = 10;
    console.log(out);
}

// console.log('out outside: ', out);

// To similate var like let, you have to use something called as an IIFE
var a = 100;
var myObj = (function (){
    var a = 10;
    return {
        a
    }
})();
console.log(a);