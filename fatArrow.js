/*
    Why did JS introduce fat arrow syntax?
    - shorter syntax.
    - better handling of this. // Wooo! interesting!
    ( Assume a obj with a function as a property when you call that function it will have a scope of obj but if that function 
     has one more function defined inside it and you call it from outer function, the **this** inside inner function will be window. 
     This can be sorted using arrow functions.)

*/

// Shorter/Succinct syntax

// Traditional
function sum(a,b) {
    return a + b;
}

// Fat Arrow way!
// const sum1 = (a, b) => a + b;

console.log(sum(10,20));
// console.log(sum1(10,20));


// Better handling of this.

let obj = {
    name: 'Chen Yu Fei',
    sayMyName: function() {
        console.log(this);
    },

    sayMyNameLaterTraditional: function() {
        setTimeout(function(){
            console.log('In traditional ', this);
        } , 1000);
    },

    sayMyNameLater: function() {
       setTimeout(() => {
           console.log('With Fat arrow later: ', this);
       }, 1000)
    },

    sayMyNameFatArrow: () => {
        console.log(this);
    },

    sayMyNameFat: (function() {
        console.log(this);
    }).bind(this)()

}

obj.sayMyName();
obj.sayMyNameLaterTraditional();
obj.sayMyNameLater(); // Fat arrow fixes the issue! Hurray! 

obj.sayMyNameFatArrow(); // Gotcha!
obj.sayMyNameFat()

/*
    Internals:
*/

let obj1 = {
    name: 'Chen Yu Fei',
    sayMyNameLater: function() {
       setTimeout(() => {
           console.log('With Fat arrow later: ', this);
       }, 1000)
    }
}

// ===

let internalObj1 = {
    name: 'Chen Yu Fei',
    sayMyNameLater: function() {
        setTimeout( function() {
            console.log('Traditional impl of fat arrow: ', this);
        }.bind(this), 1000);
    }
}


obj1.sayMyNameLater();
internalObj1.sayMyNameLater();

/*
    What fat arrow does is, it takes the this where the function is defined and binds that to the function.
*/





// Pit fall of that.

let pitfallObj = {
    name: 'Kadambi Srikanth',
    sayMyNameLater: () => {
        setTimeout(() => {
            console.log('pitfallObj: ', this);
        }, 2000);
    }
}

pitfallObj.sayMyNameLater();


// Internals of pitfallObj
let internalPitfallObj = {
    sayMyNameLater: function () {
        setTimeout( function() {
            console.log('Internal pitfallObj: ', this);
        }.bind(this), 2000); // this was supposed to be internalPitfallObj, but overrode it to window by bind.
        
    }.bind(this)  // this here is window
}

internalPitfallObj.sayMyNameLater();
