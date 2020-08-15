/* 
    Scope chain is defined by the way in which the code in written not the way in which it is called.

    Scope chain is nothing but finding the definition of the variable in the inner scope if not there its 
    outer scope and if its not there its outer scope till the global scope.
*/

// case 1
function foo() {
    console.log(myVar);
}

function goo() {
    var myVar = 1;
    foo();
}

goo();

// case 2
//Global scope
function moo() {
    // outer scope
    var myVar = 1;
    function foo() {
        // inner scope
        console.log(myVar);
    }
    foo();   
}
moo();

// Note case 1 !== case 2
// Scope chain is defined lexically!
