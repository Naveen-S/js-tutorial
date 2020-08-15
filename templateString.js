// Multiple line strings
// String interpolation

"use strict"
var place = 'India';
var name = 'Lee Chong Wei';
var greet = "Hello Bengaluru my name is Tai Tzu ying!"
const bestPlayer = () => {
    return 'Lin Dan!';
}

var greet1 = `Hello 
Bengaluru
my
name
is
Tai Tzu ying`;

var greet3 = `Hello ${place} my name is ${name}!`;

var greet4 = `Hello ${place} my name is ${bestPlayer()}!`;

console.log('greet1 ', greet);
console.log('greet2 ', greet1);
console.log('greet3 ', greet3);
console.log('greet4 ', greet4);


// Template tag

// Example 1
function h1(strings) {
    console.log(`<h1>${strings[0]}</h1>`);
}
h1`naveen`;


// Example 2
function complex(strings, ...values) {
    console.log(strings);
    console.log(values);
    var body = '';
    for(var i = 0; i < strings.length; i++ ) {
        body += strings[i] + (values[i] || "");
    }
    console.log('In complex: ', body);
}
complex`Hello ${place} my name is ${name}!`;


// Example 3
function foo(strings, ...values) { 
    console.log(strings);
    console.log(values);
    console.log(strings[1]) 
};
foo`moo${foo}foo`