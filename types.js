"use strict"
/* 
Types in Javascript?
    - Number 
    - Boolean
    - String
    - Null
    - Undefined
    
    - Object
*/

console.log(typeof(a));

var a = 100;
console.log(typeof(a));

a = 'Lee zii jia';
console.log(typeof a);

a = true;
console.log(typeof(a));

a = null;
console.log(typeof(a)); // Gotcha!

a = {}
console.log(typeof(a));


// Is null and undefined same? 
/* Why javascript has both null and undefined
    - You can assume it has like this, undefined is used by your program/Javascript to tell you the variable is not defined.
    - Whereas null is used by programmer to initialise something as no value.
    - Javascript never initializes a variable as null.
*/

// Compare only value
console.log(null == undefined); // Gotcha again!
/* 
    This is because the value that null and undefined hold is the same but not their types.
*/


// Compare both type and value
console.log(null === undefined);


/* 
    === check both type and value and returns true only if both are matching.
    == : JS tries to become smart here, take a example: 0 == "0"
            - Left side is number and right side is string so it tries to coerce and then does the comparison.
            https://dorey.github.io/JavaScript-Equality-Table/ 
*/

// Always use ===



/* 
NaN
What's NaN?
Not a number.
*/

var a = 10 / "abc";
console.log(a); 

// isNaN to check if number is not a number.
console.log(isNaN(a));

// case 1
a = "1";
console.log(isNaN(a));

// case 2
a = "A";
console.log(isNaN(a)); // What "A" is NaN?
// This is happening because of coercion, internally it happens like below: 
// console.log(isNaN(Number("A")))

// case 3
console.log(NaN === NaN); // Gotcha!


// So how do we check if a variable is truly NaN
/* 
    Any number compare is itself is always true, except NaN, we use this to check if varable to truely a NaN.
*/
a = 1;
console.log(a !== a);

console.log(NaN !== NaN);

// SIDE NOTE: NaN == ? is always false
