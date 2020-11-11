// https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089
var a = {
    name: "Rama",
    details: {
        sex: "Male",
        Age: 26
    }
}

var b = a; // Shallow copy. 
var c = {...a}; // deep copy (not completely)

var copyWithAssign = {};
Object.assign(copyWithAssign, a);

var e = JSON.parse(JSON.stringify(a));

a.name = 'Harshith';

console.log('a ', a);
console.log('b ', b);
console.log('c ', c);
console.log('d ', copyWithAssign);
console.log('e' , e);

// Spread operator failed to deep copy here.
a.details.sex = "Female"; 

console.log('a ', a);
console.log('b ', b);
console.log('c ', c);
console.log('d ', copyWithAssign);


var nestedArray = [["😉"], ["😊"], ["😇"]]
var nestedCopyWithSpread = [...nestedArray]

console.log(nestedArray === nestedCopyWithSpread);
