
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.whoiam = function() {
    return `I'm ${this.firstName} ${this.lastName}!`;
}


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