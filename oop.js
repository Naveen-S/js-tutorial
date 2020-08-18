/* 
    Javascript makes use of function constructor pattern to achieve OOP.
*/
'use strict'
// Standard among JS ecosystem is function constructor has function name starts with a Capital. / Psuedo classical
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// It looks exactly like everyday function. The thing that does the magic is `new` keyword.

// This will throw an error.
/* let dora = Person('Swarnima', 'Dora');
console.log(dora); */

let shetty = new Person('Ashish', 'Shetty');
console.log(shetty);

/* 
    The above is similar to below, but not 100% same. **** Because the new operator does one more thing. 
    let shetty = {};
    Person.call(shetty, 'Ashish', 'Shetty');
    console.log(shetty);
*/


// Now how do we add methods to the function constructor

// Method 1

function Person1(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        console.log(`${this.firstName} ${this.lastName} `);
    }

    this.closuredFullName = function () {
        console.log(`Closured: ${firstName} ${this.lastName}`);
    }
}

let rama = new Person1('Rama', 'Subramanian');
rama.fullName();

/* 
    Problem with this method
        - If you create 100 - 1000 instances of Person1 object each instance will have fullName as its property
        leading to code boating. 
        Refer: oop3.png
        
    Advantages:
        - Can make fields private.
*/

rama.firstName = 'Venki';
rama.fullName(); // ?
rama.closuredFullName(); // Private fields maintained


// Method 2
// Add methods to prootype of the function
/* 
    Aside:
    Like how every object have __proto__ property, every function will have a prototype property.
    This prototype which is an object will have __proto__ property.
    // Refer: oop.png

    From the above example rama will have a __proto__ property, and Person function will have a prototype property,
    this __proto__ property points to prototype property of function constructor. 
    That's how prototypal inheritance is achieved.
    (the keyword `new` will automatically do this.)
*/ 

Person1.prototype.prototypalFullName = function () {
    console.log(`Prototypal: ${this.firstName} ${this.lastName}`);
}
rama.prototypalFullName();

/* 
    Advantage of above method:
        Refer: oop2.png
        If multiple instances needs same method adding that method to the function constructor proptotye will
        make instance size smaller.
    
    Disadvantage:
        Cannot achieve private field. All fields will be public. 
*/

