/* 
    this: this refers to the calling context.
    This is not completely true. (slippers on my face)

    Call Apply and Bind can alter the this.

    What is function in JS?
        - Functions are nothing but an object.
        - It has a lot of properties.
*/

function foo() {
    console.log(this); 
}

foo(); // window
console.log(foo);
console.log(foo.name); // functions are just objects it has properties
foo.gender = 'Male'; // we can add more properties.
console.log(foo.toString()); // functions which are just objects has properties which are functions as well.


console.log('----------------------------');

// Few importants properties on that functions are call apply and bind.
// Note: this need not be always an object it can be anything even a number 1.


function dragon() {
    mother =  this.mother;

    console.log(mother);
}

dragon(); // undefined
dragon.call({mother: 'danny'}); // You can set the this using call.
dragon.apply({mother: 'Khaleesi'}); // Same as call
myDragon = dragon.bind({mother: 'Cersei'}); // Bind, binds the function with the this during function creation and returns a new function.
dragon(); // undefined
myDragon(); // Gotcha!



/* 
    Difference between call and apply.
    call takes variable number of arguments but whereas apply takes an array.

*/

// Example 1
function sum(a, b, c, d) {
    console.log(a + b + c + d); 
}
sum(1, 2, 3, 4);
sum.call(null, 1, 2, 3, 4);
sum.apply(null, [1, 2, 3, 4]);



// Example 2
let numbers = [36, 24, 34];

function sum1() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

sum1(numbers); // Doesn't work.

/* 
    Pre ES6 before spread was available.
    Assume you had an array and you would need to find the sum. 
    This can't be achieve through call because call expects the arguments be be exploaded.
*/

sum1.apply(null, numbers);