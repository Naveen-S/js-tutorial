// Without IIFE
var thing = {name: 'other'};
console.log('thing in other:', thing);

// with IIFE
(function() {
    var myThing = {gender: 'Female'};
    console.log('myThing in other: ', myThing);
})()