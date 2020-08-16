"use strict"
/* 
    What is closure?
    Closure is when a function is able to remember and access the variables of the outer (enclosing) function 
    even when that function is executing outside its scope.

    “An inner function always has access to the vars and parameters of its outer function, 
    even after the outer function has returned.”

    Read more: https://hackernoon.com/how-to-use-javascript-closures-with-confidence-85cd1f841a6b

*/
//basic
function saymyname(name) {
    var greet = `Hello ${name}!`;
    return function() {
        console.log(greet);
    }
}
saymyname('PV Sindhu')();

// level 2

var foo = [];
for(var i = 0; i < 10; i++) {
    foo[i] = (function(test) { 
                return function() {
                        console.log(test);
                    } 
            })(i);
}
foo[0]();
foo[1]();
foo[2]();
console.log('---------------------------');


// Interviewer's favorite
// Print numbers 1 - 10 with interval of 1 second interval between each number. 
// Pre ES6
for(var i = 1; i < 11; i++) {
    function outer(j) {
        // inner function always has snapshot of its outer function's variables and paramaters
        setTimeout(function(){
            console.log(j);
        }, j * 1000);
    }
    outer(i);
}
console.log('---------------------------');

// With ES6
// https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example?rq=1
for(let i = 1; i < 11; i++) {
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}
// https://youtu.be/-xqJo5VRP4A

/* Let me take a stab at explaining why the above code works with let. 
    - let: block level scope.
    - var: function level scope.

    when you use let in the for loop, the variable i get initialized every time.
    i.e. a new let i = something everytime the loop runs.
    But in case of var it has function level scope and the i, increments instead of reassigning.
*/


// What is the practical use case of closure?
// They can be used to provide the encapsulation same as in Java.
// Example:

function dragon(name){
    let breathe = 'fire';
    let food = 'biryani';
    
    function foodPreference() {
        console.log(`My name is ${name} and I like ${food}`);
    }

    function attack() {
        console.log(`I attack with ${breathe}`);
    }

    return {foodPreference,attack};
}

let drogon = dragon('drogon');
let charmander = dragon('charmander');
console.dir(drogon); // Run in chrome dev tools for better understanding.
console.dir(charmander);
drogon.foodPreference();
charmander.foodPreference();




