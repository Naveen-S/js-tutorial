/*
Psuedo Classical Inheritance

Inheritance in Js is achieve through prototype chain. 
*/

function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
}

// What does Object.create do?
// It just create an object with base as supplied object.

/* 
var lee = { name: 'Lee chong wei', ranking: 1};
var lin = Object.create(lee);
var tty = Object.create(lee, {name: {value: 'TTY'}});
 */


function Professional (honorific, firstName, lastName) {
    // Similar to calling super: Note this doesn't do inheritance.
    Person.call(this, firstName, lastName);
    this.honorific = honorific;
}

Professional.prototype = Object.create(Person.prototype);


Professional.prototype.profFullName = function () {
    console.log(`Prof: ${honorific} ${this.firstName}  ${this.lastName}`);
}
console.log(Person);
console.log(Professional.profFullName());
console.log(Professional.fullName());

