/*
    Prototypal Inheritance is achieved through again Prototype(__proto__) chain.
    Without any psuedo (Java) style way (No function constructor) with just objects)
*/


// basic
var Person = {
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// The __proto__ of lee point to Person.
var lee = Object.create(Person);
console.log(lee.fullName());
// Ha, we forgot to bootstrap firstName and lastName


// Method 1

var Person1 = {
    init: function (firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      return this; // No required but good to do.  
    },
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// The __proto__ of lee point to Person.
var lin = Object.create(Person1);
lin.init('Lin', 'Dan');
console.log(lin.fullName());


// Method 2
var tty = Object.create(Person, {firstName: {value: 'Tai Tzu'}, lastName: {value: 'Ying'}});
console.log(tty.fullName());


// Method 3: Factory function

function Personfactory(firstName, lastName) {
    var person = Object.create(Person);
    person.firstName = firstName;
    person.lastName = lastName;
    return person;
}

var anthony = Personfactory('Anthony', 'Ginting');
console.log(anthony.fullName());

// So now we understand how to create a instance using the prototype pattern let's now see how do we do
// prototypal inheritance.

var Professional =  Object.create(Person, {
    init: {
        value: function (honorific, firstName, lastName) {
                    this.honorific = honorific;
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
        },
    professionalName: {
        value: function () {
            return `${this.honorific} ${this.firstName} ${this.lastName}`;        
        }
    }
})
var jha = Object.create(Professional);
jha.init('Mr', 'Lee ziu', 'Jha');
console.log(jha.professionalName());
