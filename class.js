/* 
    ES6 feature: class
    
    Note: Run this in browser not on node environment.
*/

class Person {
    // These are not private fields but its a standard among developers community to indicate 
    // that anything that is prefixed with _ is internal to class don't modify or use directly.
    // Use getters and setters instead.      

    _firstName = '';
    _lastName = '';

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Similar to methods of class. 
    fullname() {
        // return `${this._firstName} ${this._lastName}`; using private fields allowed
        
        // using getters
        return `${this.fname} ${this.lname}`;
    }

    // Getter
    get fname() {
        return this._firstName;
    }

    get lname() {
        return this._lastName;
    }

    // Setter
    set fname(name) {
        if(name === '' || name === undefined) {
            console.error('First name cannot be empty');
        } else {
            this._firstName = name;
        }

    }
    whoiam() {
        return `I'm ${this._firstName} ${this._lastName}!`;
    }
}

let tty = new Person('Tai Tzu', 'Ying');
console.log(tty);
console.log(tty.fullname());

// Although its private we can access it.
console.log('Not private _firstName: ', tty._firstName);

// Accessing using getters
tty.fname;

// setting using setters
tty.fname = '';



//  Inheritance using ES6 keywords

class Student extends Person {
    constructor(firstName, lastName, course) {
        // When extending from a base class super should be the first thing you call.
        super(firstName, lastName);
        this.course = course;
    }

    whoiam() {
        return `${super.whoiam()} Am doing a course on ${this.course}!`
    }

}

let lin = new Student('Lin', 'Dan', 'Badminton');
lin.whoiam();